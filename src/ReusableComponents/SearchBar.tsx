import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "@mantine/form";
import { TextInput } from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";
import dayjs from "dayjs";

import { setRentState } from "../redux/reducers/bookingSlice";
import { RootState } from "../redux/store";

import "./SearchBar.scss";
import { UseFormReturnType } from "@mantine/form/lib/types";

interface SearchBarValues {
  location: string;
  startDate: Date | string;
  endDate: Date | string;
}

const SearchBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { location, startDate, endDate } = useSelector(
    (state: RootState) => state.booking
  );

  console.log("global state:", location, startDate, endDate);

  const form = useForm<SearchBarValues>({
    initialValues: {
      location,
      startDate: startDate.length > 0 ? dayjs(startDate).toDate() : "",
      endDate: endDate.length > 0 ? dayjs(endDate).toDate() : "",
    },
    validate: {
      location: (value) => (value.length > 2 ? null : "Provide rent location."),
      startDate: (value) =>
        value ? null : "Provide the starting date and time.",
      endDate: (value) => (value ? null : "Provide the ending date and time."),
    },
  });

  const handleSearchSubmit = ({
    values: { location, startDate, endDate },
  }: UseFormReturnType<
    SearchBarValues,
    (values: SearchBarValues) => SearchBarValues
  >) => {
    console.log("Handle submit:", { location, startDate, endDate });
    dispatch(
      setRentState({
        location,
        startDate: dayjs(startDate).toISOString(),
        endDate: dayjs(endDate).toISOString(),
      })
    );
    navigate("/vehicles");
  };

  return (
    <div className="searchBar">
      <TextInput
        label="Location"
        {...form.getInputProps("location")}
      ></TextInput>
      <DateTimePicker
        label="Start Date and Time"
        {...form.getInputProps("startDate")}
      ></DateTimePicker>
      <DateTimePicker
        label="End Date and Time"
        {...form.getInputProps("endDate")}
      ></DateTimePicker>
      <button onClick={() => handleSearchSubmit(form)} type="submit">
        Bigass
      </button>
    </div>
  );
};

export default SearchBar;
