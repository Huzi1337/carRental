import { DateTimePicker } from "@mantine/dates";
import { UseFormReturnType } from "@mantine/form";

import "./Date.scss";
import { FormInitialState } from "../../redux/reducers/bookingTypes";

const Date = ({ form }: { form: UseFormReturnType<FormInitialState> }) => {
  return (
    <>
      <hr></hr>
      <label>Location</label>
      <input
        {...form.getInputProps("location")}
        className="booking__input__date"
      ></input>
      <p className="booking__diff__location">
        <input type="checkbox"></input>{" "}
        <span>Return at different location</span>
      </p>
      <div className="booking__row">
        <div className="booking__col">
          <label>Pick-up Date and Time</label>
          <DateTimePicker {...form.getInputProps("startDate")} />
        </div>
        <div className="booking__col">
          <label>Drop-off Date and Time</label>
          <DateTimePicker {...form.getInputProps("endDate")} />
        </div>
      </div>
      <hr></hr>
      <div className="booking__row">
        <div className="booking__col priceLabel">
          <h6>Car Rental:</h6>
          <h6>Cost per 24h:</h6>
        </div>
        <div className="booking__col priceValue">
          <h6 className="price">$300</h6>
          <h6>$69</h6>
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
