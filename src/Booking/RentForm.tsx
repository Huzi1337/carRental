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
  IFormInitialState,
  InitialState,
  IPaymentInfo,
  IPersonalInfo,
} from "../redux/reducers/bookingTypes";
import { UseFormReturnType, useForm } from "@mantine/form";

import { useParams, useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import dayjs from "dayjs";
import { calculateRentCost } from "../utils/calculateRentCost";

const RentForm = ({ initialValues }: { initialValues: InitialState }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const incrementCurrentStep = () => {
    setCurrentStep((prevStep: number) => prevStep + 1);
  };

  const decrementCurrentStep = () => {
    setCurrentStep((prevStep: number) => prevStep - 1);
  };

  const params = useParams();
  const navigate = useNavigate();

  const { startDate, endDate, pricePerDay } = initialValues;

  const form = useForm<IFormInitialState>({
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
        value.length === 0 ? "Please provide your first name." : null,
      lastName: (value) =>
        value.length === 0 ? "Please provide your last name." : null,
      // birthDate: (value) =>
      //   value.length > 0
      //     ? dayjs(value).diff(dayjs(), "year") < 18
      //       ? "You must be at least 18 years old to rent a car."
      //       : null
      //     : "Please provide your birth date.",
    },
  });

  const memoizedRentCost = useMemo(
    () =>
      calculateRentCost(
        form.values.startDate,
        form.values.endDate,
        pricePerDay
      ),
    [form.values.startDate, form.values.endDate, pricePerDay]
  );

  const FORM_STEPS = [
    [
      <Date
        rentCost={memoizedRentCost}
        pricePerDay={pricePerDay}
        form={form}
      />,
      "Booking Details",
    ],
    [<Personalize form={form} />, "Personalize Your Rent"],
    [<PersonalInformation form={form} />, "Personal Information"],
    [<Payment rentCost={memoizedRentCost} form={form} />, "Payment"],
  ];
  const dispatch = useDispatch();

  const stepValidationHandler = (values: { [key: string]: any }) => {
    let stepValid = true;
    Object.keys(values).forEach((key) => {
      form.validateField(key);
      if (!form.isValid(key)) {
        console.log(form.errors);
        stepValid = false;
      }
    });
    return stepValid;
  };

  const buttonClickHandler = (
    { values }: UseFormReturnType<IFormInitialState>,
    direction: "next" | "back"
  ) => {
    if (currentStep === 0 && direction === "back") {
      navigate(`/vehicles/${params.vehicleId}`);
      return;
    }

    const { location, dropOffLocation, startDate, endDate, mileage } = values;
    let isValid = true;
    switch (currentStep) {
      case 0:
        const rentEssentials = {
          location,
          dropOffLocation,
          startDate,
          endDate,
        };
        isValid = stepValidationHandler(rentEssentials);
        if (isValid)
          dispatch(
            setRentState({
              ...rentEssentials,
              startDate: dayjs(startDate).toISOString(),
              endDate: dayjs(endDate).toISOString(),
            })
          );
        break;
      case 1:
        dispatch(
          setRentState({
            price: memoizedRentCost,
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
        }: IPersonalInfo = values;
        const personalInfo = {
          firstName,
          lastName,
          birthDate,
          email,
          drivingLicenseId,
          phoneNumber,
        };
        isValid = stepValidationHandler(personalInfo);
        if (isValid)
          dispatch(
            setRentState({
              ...personalInfo,
            })
          );
        break;
      case 3:
        const { cardProvider, name, cardNumber, cvv, exp }: IPaymentInfo =
          values;
        const paymentInfo = { cardProvider, name, cardNumber, cvv, exp };
        isValid = stepValidationHandler(paymentInfo);
        if (isValid)
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

    if (direction === "next" && isValid) {
      console.log("form errors:", form.errors, form.isValid());
      if (currentStep === FORM_STEPS.length - 1) {
        dispatch(setIsComplete());
        return;
      }

      incrementCurrentStep();

      console.log("After incrementing current step: ", currentStep);
    } else if (direction === "back") {
      decrementCurrentStep();
    }
  };

  return (
    <>
      <Button
        onClick={() => buttonClickHandler(form, "back")}
        className="btn__back"
      >
        <i></i>Back
      </Button>
      <FormProgress
        currentStep={currentStep}
        numberOfSteps={FORM_STEPS.length}
      />
      <h3 className="booking__stepName">
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
            <RentSummary
              startDate={form.values.startDate}
              endDate={form.values.endDate}
              rentCost={memoizedRentCost}
              contentClass="default"
            />
          </div>
          <Button
            submit={true}
            onClick={() => {
              buttonClickHandler(form, "next");
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
