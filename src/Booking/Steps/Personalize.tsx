import { UseFormReturnType } from "@mantine/form";

import { Slider } from "@mantine/core";

import { IFormInitialState } from "../../redux/reducers/bookingTypes";
import InsuranceCard from "./Personalize/InsuranceCard";

import "./Personalize.scss";

type Insurance = {
  name: string;
  cost: number;
  description: string;
}[];

const Personalize = ({
  form,
  insuranceSelectHandler,
  INSURANCE,
  selectedInsurance,
}: {
  form: UseFormReturnType<IFormInitialState>;
  insuranceSelectHandler: (key: number) => void;
  INSURANCE: Insurance;
  selectedInsurance: number;
}) => {
  return (
    <>
      <hr></hr>
      <h4>Mileage</h4>

      <p className="mileage__subtitle">
        Increase or decrease your mileage, only pay for what you need
      </p>

      <div className="personalize__slider__container">
        <Slider
          labelAlwaysOn
          min={0}
          max={1000}
          {...form.getInputProps("mileage")}
        />
      </div>

      <hr></hr>
      <h4>Insurance</h4>
      <p className="insurance__subtitle">
        Ensure your safety and choose the options that best fits you.
      </p>
      {INSURANCE.map((option, key) => (
        <InsuranceCard
          key={key}
          insuranceName={option.name}
          cost={option.cost}
          description={option.description}
          onClick={() => insuranceSelectHandler(key)}
          selected={selectedInsurance === key}
        ></InsuranceCard>
      ))}
    </>
  );
};

export default Personalize;
