import { UseFormReturnType } from "@mantine/form";
import Button from "../../ReusableComponents/Button";

import { useState } from "react";

import { Slider } from "@mantine/core";

import { IFormInitialState } from "../../redux/reducers/bookingTypes";
import InsuranceCard from "./Personalize/InsuranceCard";

import "./Personalize.scss";

const INSURANCE = [
  {
    name: "Unlimited liability",
    cost: "Free",
    description: "You will be fully liable for theft or damage to the vehicle.",
  },
  {
    name: "$8000 excess",
    cost: "$80/day",
    description: "You will be only liable for theft or damage up to $8000.",
  },
];

const Personalize = ({
  form,
}: {
  form: UseFormReturnType<IFormInitialState>;
}) => {
  const [selectedInsurance, setSelectedInsurance] = useState(0);

  const insuranceSelectHandler = (index: number) => {
    setSelectedInsurance(index);
  };
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
      {INSURANCE.map((option, key) => (
        <InsuranceCard
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
