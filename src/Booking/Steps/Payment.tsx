import { UseFormReturnType } from "@mantine/form";
import { FormInitialState } from "../../redux/reducers/bookingTypes";
import "./Payment.scss";
import { Radio } from "@mantine/core";

const PAYMENT_OPTIONS = ["MasterCard", "Visa", "Bitcoin"];

const Payment = ({ form }: { form: UseFormReturnType<FormInitialState> }) => {
  return (
    <>
      <hr></hr>
      <div className="booking__row totalPrice">
        <h6>Total Price:</h6>
        <h6>$420</h6>
      </div>
      <p className="payment__p__info">
        Basic Insurance cost included. <br />
        Local taxes included. <br />
        Free cancellation.
      </p>
      <hr></hr>
      <Radio.Group
        name="favoriteFramework"
        label="Select your favorite framework/library"
        description="This is anonymous"
        withAsterisk
      >
        {PAYMENT_OPTIONS.map((option) => (
          <div className="booking__row payment" key={option}>
            <Radio value={option} />
            <div className={`icon__payment ${option}`}></div>{" "}
            <label>{option}</label>
          </div>
        ))}
      </Radio.Group>
      <hr></hr>

      <div className="booking__col cardInfo">
        <div className="booking__col">
          <label>Cardholder Name</label>
          <input></input>
        </div>

        <div className="booking__row cardInfo">
          <div className="booking__col cardNo">
            <label>Credit Card Number</label>
            <input></input>
          </div>
          <div className="booking__col ccv">
            <label>CCV</label>
            <input></input>
          </div>
        </div>
        <div className="booking__col expDate">
          <label>Expiration Date</label>
          <input></input>
        </div>
      </div>
    </>
  );
};

export default Payment;
