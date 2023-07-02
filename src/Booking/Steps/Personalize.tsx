import { UseFormReturnType } from "@mantine/form";
import Button from "../../ReusableComponents/Button";
import Card from "../../ReusableComponents/Card";

import { Slider } from "@mantine/core";

import "./Personalize.scss";
import { IFormInitialState } from "../../redux/reducers/bookingTypes";

const Personalize = ({
  form,
}: {
  form: UseFormReturnType<IFormInitialState>;
}) => {
  return (
    <>
      <hr></hr>
      <h4>Mileage</h4>

      <p className="mileage__subtitle">
        Increase or decrease your mileage, only pay for what you need
      </p>
      <Button onClick={() => {}} className="btn__outline">
        Calculate road
      </Button>
      <div className="personalize__slider__container">
        <Slider {...form.getInputProps("mileage")} />
      </div>

      <hr></hr>
      <h4>Insurance</h4>
      <p className="insurance__subtitle">
        Ensure your safety and choose the options that best fits you.
      </p>
      <Card className="card__insurance" tint={false}>
        <div className="insurance__content">
          <div className="insurance__row">
            <h5>Unlimited liability</h5>
            <h5>Free</h5>
          </div>
          <p className="insurance__desc">
            You will be fully liable for theft or damage to the vehicle.
          </p>
        </div>
        <div className="insurance__btn__wrapper">
          <Button onClick={() => {}} className="btn__outline">
            Select
          </Button>
        </div>
      </Card>
      <Card className="card__insurance" tint={false}>
        <div className="insurance__content">
          <div className="insurance__row">
            <h5>$8000 excess</h5>
            <h5>$80 / day</h5>
          </div>
          <p className="insurance__desc">
            You will be fully liable for theft or damage to the vehicle.
          </p>
        </div>
        <div className="insurance__btn__wrapper">
          <Button onClick={() => {}} className="btn__outline fill">
            Select
          </Button>
        </div>
      </Card>
    </>
  );
};

export default Personalize;
