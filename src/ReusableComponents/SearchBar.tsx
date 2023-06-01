import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";

import { RentEssentials } from "../redux/reducers/bookingTypes";
import { setRentDetails } from "../redux/reducers/bookingSlice";
import { RootState } from "../redux/store";

type SearchBarValues = {
  location: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
};

const SearchBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {location, startDate, startTime, endDate, endTime} = useSelector((state: RootState) => state.booking)

  const INITIAL_VALUES: SearchBarValues = {
    location,
    startDate,
    startTime,
    endDate,
    endTime,
  };

  const handleSubmit = ({
    location,
    startDate,
    startTime,
    endDate,
    endTime,
  }: SearchBarValues) => {
    const searchData: RentEssentials = {
      location,
      startDate,
      startTime,
      endDate,
      endTime,
    };
    console.log(searchData);
    dispatch(setRentDetails(searchData));
    navigate("/vehicles");
  };

  return (
    <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit}>
      <Form className="searchBar">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Field name="location" placeholder="Location" />

          <Field name="startDate" component={DatePicker}></Field>
          <Field name="startTime" component={TimePicker}></Field>
          <Field name="endDate" component={DatePicker}></Field>
          <Field name="endTime" component={DatePicker}></Field>
        </LocalizationProvider>
        <button>Bigass</button>
      </Form>
    </Formik>
  );
};

export default SearchBar;
