import { UseFormReturnType } from "@mantine/form";
import { IFormInitialState } from "../../redux/reducers/bookingTypes";
import "./Payment.scss";
import { Radio, TextInput } from "@mantine/core";
import { ChangeEvent, useEffect, useState } from "react";

const PAYMENT_OPTIONS = ["MasterCard", "Visa", "Bitcoin"];

interface Props {
  form: UseFormReturnType<IFormInitialState>;
  rentCost: number;
}

const Payment = ({
  form,
  form: {
    values: { cardNumber: formCardNumber, exp },
  },
  rentCost,
}: Props) => {
  const [cardNumber, setCardNumber] = useState(
    formCardNumber.length > 0 ? formCardNumber : ""
  );
  const [expirationDate, setExpirationDate] = useState(
    exp.length > 0 ? exp : ""
  );
  const [cvv, setCVV] = useState("");
  useEffect(() => {
    form.setFieldValue("cardNumber", cardNumber);
  }, [cardNumber]);
  useEffect(() => {
    form.setFieldValue("exp", expirationDate);
  }, [expirationDate]);

  useEffect(() => {
    form.setFieldValue("cvv", cvv);
  }, [cvv]);

  const formatCardNumber = (value: string) => {
    const sanitizedValue = value.replace(/[^\d]/g, "");
    const groups = sanitizedValue.match(/.{1,4}/g);
    const formattedValue = groups ? groups.join(" ") : sanitizedValue;
    return formattedValue;
  };
  const formatExpirationDate = (value: string): string => {
    const sanitizedValue = value.replace(/[^0-9]/g, "");
    const groups = sanitizedValue.match(/.{1,2}/g);
    const formattedValue = groups ? groups.join("/") : sanitizedValue;
    return formattedValue;
  };
  const formatCVV = (value: string): string => {
    const sanitizedValue = value.replace(/[^0-9]/g, "");

    return sanitizedValue;
  };

  const handleCardNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    const formattedValue = formatCardNumber(value);
    setCardNumber(formattedValue);
  };
  const handleExpirationDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    const formattedValue = formatExpirationDate(value);
    setExpirationDate(formattedValue);
  };

  const handleCVVChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    const formattedValue = formatCVV(value);
    setCVV(formattedValue);
  };
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
          <TextInput {...form.getInputProps("name")}></TextInput>
        </div>

        <div className="booking__row cardInfo">
          <div className="booking__col cardNo">
            <label>Credit Card Number</label>
            <TextInput
              {...form.getInputProps("cardNumber")}
              onChange={handleCardNumberChange}
              value={cardNumber}
              placeholder="xxxx xxxx xxxx xxxx"
              maxLength={19}
            ></TextInput>
          </div>
          <div className="booking__col ccv">
            <label>CCV</label>
            <TextInput
              {...form.getInputProps("cvv")}
              onChange={handleCVVChange}
              value={cvv}
              maxLength={3}
              placeholder="xxx"
            ></TextInput>
          </div>
        </div>
        <div className="booking__col expDate">
          <label>Expiration Date</label>
          <TextInput
            {...form.getInputProps("exp")}
            onChange={handleExpirationDateChange}
            value={expirationDate}
            maxLength={5}
            placeholder="xx / xx"
          ></TextInput>
        </div>
      </div>
    </>
  );
};

export default Payment;
