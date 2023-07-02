import { UseFormReturnType } from "@mantine/form";
import { IFormInitialState } from "../../redux/reducers/bookingTypes";
import "./Payment.scss";
import { Radio, NumberInput, TextInput } from "@mantine/core";

const PAYMENT_OPTIONS = ["MasterCard", "Visa", "Bitcoin"];

interface Props {
  form: UseFormReturnType<IFormInitialState>;
  rentCost: number;
}

const Payment = ({ form, rentCost }: Props) => {
  return (
    <>
      <hr></hr>
      <div className="booking__row totalPrice">
        <h6>Total Price:</h6>
        <h6>${rentCost}</h6>
      </div>
      <p className="payment__p__info">
        Basic Insurance cost included. <br />
        Local taxes included. <br />
        Free cancellation.
      </p>
      <hr></hr>
      <Radio.Group>
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
            <NumberInput
              hideControls
              maxLength={16}
              formatter={(value) => value.replace(/(\d{4})(?=\d)/g, "$1 ")}
            ></NumberInput>
          </div>
          <div className="booking__col ccv">
            <label>CCV</label>
            <NumberInput maxLength={3} hideControls></NumberInput>
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
