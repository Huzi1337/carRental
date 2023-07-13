import { DateTimePicker } from "@mantine/dates";
import { UseFormReturnType } from "@mantine/form";
import { TextInput, Checkbox } from "@mantine/core";

import { useState } from "react";

import "./Date.scss";
import { IFormInitialState } from "../../redux/reducers/bookingTypes";

interface Props {
  form: UseFormReturnType<IFormInitialState>;
  pricePerDay: number;
  rentCost: number;
}

const Date = ({ form, pricePerDay, rentCost }: Props) => {
  const [isDifferentDropOffLocation, setIsDifferentDropOffLocation] =
    useState(false);

  return (
    <>
      <hr></hr>
      <label>Pick-up Location</label>
      <TextInput
        {...form.getInputProps("location")}
        className="booking__input__date"
      ></TextInput>
      {isDifferentDropOffLocation && (
        <>
          <label>Drop-off Location</label>
          <TextInput
            {...form.getInputProps("dropOffLocation")}
            className="booking__input__date"
          ></TextInput>
        </>
      )}

      <p className="booking__diff__location">
        <Checkbox
          label="Return at different location"
          checked={isDifferentDropOffLocation}
          onChange={(event) =>
            setIsDifferentDropOffLocation(event.currentTarget.checked)
          }
        ></Checkbox>
      </p>
      <div className="booking__row date">
        <div className="booking__col">
          <label>Pick-up Date and Time</label>
          <div>
            <div className="rentStartArrow"></div>
            <DateTimePicker {...form.getInputProps("startDate")} />
          </div>
        </div>
        <div className="booking__col">
          <label>Drop-off Date and Time</label>
          <DateTimePicker
            icon={<div className="rentEndArrow"></div>}
            {...form.getInputProps("endDate")}
          />
        </div>
      </div>
      <hr></hr>
      <div className="booking__row">
        <div className="booking__col priceLabel">
          <h6>Car Rental:</h6>
          <h6>Cost per 24h:</h6>
        </div>
        <div className="booking__col priceValue">
          <h6 className="price">${rentCost}</h6>
          <h6>${pricePerDay}</h6>
        </div>
      </div>

      <p className="booking__subscript">
        Basic Insurance cost included <br />
        Local taxes included <br /> Free cancellation
      </p>
    </>
  );
};

export default Date;
