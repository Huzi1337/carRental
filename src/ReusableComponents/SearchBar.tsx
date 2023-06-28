import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "@mantine/form";
import { TextInput } from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";
import dayjs from "dayjs";

import { setRentDetails } from "../redux/reducers/bookingSlice";
import { RootState } from "../redux/store";

import "./SearchBar.scss";

interface SearchBarValues {
  location: string;
  startDate: Date | string;
  endDate: Date | string;
}

const SearchBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [localState, setLocalState] = useState<any | null>(null);
  const { location, startDate, endDate } = useSelector(
    (state: RootState) => state.booking
  );

  console.log("global state:", location, startDate, endDate);
  const [startDateState, setStartDateState] = useState(startDate);

  const form = useForm<SearchBarValues>({
    initialValues: {
      location,
      startDate:
        startDateState.length > 0 ? dayjs(startDateState).toDate() : "",
      endDate: endDate.length > 0 ? dayjs(endDate).toDate() : "",
    },
    validate: {
      location: (value) => (value ? null : "Provide rent location."),
      startDate: (value) =>
        value ? null : "Provide the starting date and time.",
      endDate: (value) => (value ? null : "Provide the ending date and time."),
    },
  });

  useEffect(() => {
    if (!localState) setLocalState({ location, startDate, endDate });
    if (
      location &&
      startDate &&
      endDate &&
      localState.location !== location &&
      localState.startDate !== startDate &&
      localState.endDate !== endDate
    ) {
      setLocalState({ location, startDate, endDate });
    }
  }, []);

  console.log("local state:", localState);

  const handleSubmit = ({
    location,
    startDate,

    endDate,
  }: SearchBarValues) => {
    console.log("Handle submit:", { location, startDate, endDate });
    dispatch(
      setRentDetails({
        location,
        startDate: dayjs(startDate).toISOString(),
        endDate: dayjs(endDate).toISOString(),
      })
    );
    navigate("/vehicles");
  };

  return (
    <form className="searchBar" onSubmit={form.onSubmit(handleSubmit)}>
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
      <button type="submit">Bigass</button>
    </form>
  );
};

export default SearchBar;
