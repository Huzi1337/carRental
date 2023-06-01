import "./RentForm.scss";
import Button from "../ReusableComponents/Button";
import FormProgress from "./Steps/FormProgress";
import Date from "./Steps/Date";
import Personalize from "./Steps/Personalize";
import Payment from "./Steps/Payment";
import PersonalInformation from "./Steps/PersonalInformation";
import RentSummary from "./RentSummary";

import { useSelector, useDispatch } from "react-redux";
import { nextStep } from "../redux/reducers/bookingSlice";
import { RootState } from "../redux/store";
import { Form, Formik } from "formik";
import { InitialState } from "../redux/reducers/bookingTypes";

const FORM_STEPS = [
  [<Date />, "Booking Details"],
  [<Personalize />, "Personalize Your Rent"],
  [<PersonalInformation />, "Personal Information"],
  [<Payment />, "Payment"],
];

const RentForm = () => {
  const initialState = useSelector((state: RootState) => state.booking);
  const { currentStep: step } = initialState;

  const dispatch = useDispatch();

  const buttonHandler = () => {
    dispatch(nextStep());
  };

  const onSubmit = (values: InitialState) => {
    console.log(values);
    buttonHandler();
    // if (step === FORM_STEPS.length - 1) ;
  };
  return (
    <Formik initialValues={initialState} onSubmit={onSubmit}>
      <Form className="formikForm">
        <FormProgress />
        <h3>{FORM_STEPS[step][1]}</h3>
        <div className="booking__row main">
          <div className="booking__col lg">{FORM_STEPS[step][0]}</div>

          <div className="booking__col sm">
            <div className="booking__summary">
              <h5 className="booking__importantInfo">
                <div className="icon"></div>Important Information
              </h5>
              <RentSummary contentClass="default" />
            </div>
            <Button onClick={() => {}} className="btn__form">
              {step === 3 ? "Make Payment" : "Next"}
            </Button>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default RentForm;
