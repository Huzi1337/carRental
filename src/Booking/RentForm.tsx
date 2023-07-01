import "./RentForm.scss";
import Button from "../ReusableComponents/Button";
import FormProgress from "./Steps/FormProgress";
import Date from "./Steps/Date";
import Personalize from "./Steps/Personalize";
import Payment from "./Steps/Payment";
import PersonalInformation from "./Steps/PersonalInformation";
import RentSummary from "./RentSummary";

import { useDispatch } from "react-redux";
import { setIsComplete, setRentState } from "../redux/reducers/bookingSlice";
import {
  FormInitialState,
  InitialState,
  PaymentInfo,
  PersonalInfo,
} from "../redux/reducers/bookingTypes";
import { UseFormReturnType, useForm } from "@mantine/form";

import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import dayjs from "dayjs";

const RentForm = ({ initialValues }: { initialValues: InitialState }) => {
  const params = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const { startDate, endDate } = initialValues;
  const form = useForm<FormInitialState>({
    initialValues: {
      ...initialValues,
      startDate: dayjs(startDate).toDate(),
      endDate: dayjs(endDate).toDate(),
    },
    validate: {
      startDate: (value, values) =>
        value
          ? value > values.endDate
            ? "Rent start date must precede the end date."
            : null
          : "Select a start date.",
      endDate: (value, values) =>
        value
          ? value < values.startDate
            ? "Rent start date must precede the end date."
            : null
          : "Select a start date.",
      location: (value) =>
        value.length < 3 ? "Location name is too short." : null,
      firstName: (value) =>
        value.length > 0 ? "Please provide your first name." : null,
      lastName: (value) =>
        value.length > 0 ? "Please provide your last name." : null,
      birthDate: (value) =>
        value.length > 0
          ? dayjs(value).diff(dayjs(), "year") < 18
            ? "You must be at least 18 years old to rent a car."
            : null
          : "Please provide your birth date.",
    },
  });

  const FORM_STEPS = [
    [<Date form={form} />, "Booking Details"],
    [<Personalize form={form} />, "Personalize Your Rent"],
    [<PersonalInformation form={form} />, "Personal Information"],
    [<Payment form={form} />, "Payment"],
  ];
  const dispatch = useDispatch();

  const buttonClickHandler = ({
    values,
  }: UseFormReturnType<FormInitialState>) => {
    const { location, dropOffLocation, startDate, endDate, price, mileage } =
      values;
    switch (currentStep) {
      case 0:
        dispatch(
          setRentState({
            location,
            dropOffLocation,
            startDate: dayjs(startDate).toISOString(),
            endDate: dayjs(endDate).toISOString(),
          })
        );
        break;
      case 1:
        dispatch(
          setRentState({
            price,
            mileage,
          })
        );

        break;
      case 2:
        const {
          firstName,
          lastName,
          birthDate,
          email,
          drivingLicenseId,
          phoneNumber,
        }: PersonalInfo = values;
        dispatch(
          setRentState({
            firstName,
            lastName,
            birthDate,
            email,
            drivingLicenseId,
            phoneNumber,
          })
        );
        break;
      case 3:
        const { cardProvider, name, cardNumber, cvv, exp }: PaymentInfo =
          values;
        dispatch(
          setRentState({
            cardProvider,
            name,
            cardNumber,
            cvv,
            exp,
          })
        );
        break;
      default:
        console.log("Rent Form: step out bounds", currentStep);
        break;
    }
  };

  const incrementCurrentStep = () => {
    setCurrentStep((prevStep: number) => prevStep + 1);
  };

  const decrementCurrentStep = () => {
    setCurrentStep((prevStep: number) => prevStep - 1);
  };

  const backButtonHandler = (values: UseFormReturnType<FormInitialState>) => {
    if (currentStep === 0) {
      navigate(`/vehicles/${params.vehicleId}`);
      return;
    }
    buttonClickHandler(values);
    decrementCurrentStep();
  };

  const nextButtonHandler = (values: UseFormReturnType<FormInitialState>) => {
    buttonClickHandler(values);
    console.log("form errors:", form.errors, form.isValid());
    if (currentStep === FORM_STEPS.length - 1) {
      dispatch(setIsComplete());
      return;
    }

    incrementCurrentStep();

    console.log("After incrementing current step: ", currentStep);
  };

  return (
    <>
      <Button onClick={() => backButtonHandler(form)} className="btn__back">
        <i></i>Back
      </Button>
      <FormProgress />
      <h3>
        {currentStep < FORM_STEPS.length ? FORM_STEPS[currentStep][1] : null}
      </h3>
      <div className="booking__row main">
        <div className="booking__col lg">
          {currentStep < FORM_STEPS.length ? FORM_STEPS[currentStep][0] : null}
        </div>

        <div className="booking__col sm">
          <div className="booking__summary">
            <h5 className="booking__importantInfo">
              <div className="icon"></div>Important Information
            </h5>
            <RentSummary contentClass="default" />
          </div>
          <Button
            submit={true}
            onClick={() => {
              nextButtonHandler(form);
            }}
            className="btn__form"
          >
            {currentStep === 3 ? "Make Payment" : "Next"}
          </Button>
        </div>
      </div>
    </>
  );
};

export default RentForm;
