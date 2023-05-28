import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setRentDetails } from "../redux/reducers/bookingSlice";
import dayjs from "dayjs";

const SearchBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [location, setLocation] = useState<string>("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);

  const handleLocationChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
    console.log(date);
  };

  const handleStartTimeChange = (time: Date | null) => {
    setStartTime(time);
    console.log(time);
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
  };

  const handleEndTimeChange = (time: Date | null) => {
    setEndTime(time);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const timeStart = dayjs(startTime);
    const timeEnd = dayjs(endTime);

    const searchData = {
      location,
      startDate: dayjs(startDate)
        .set("hour", timeStart.get("hour"))
        .set("minute", timeStart.get("minute")),
      endDate: dayjs(endDate)
        .set("hour", timeEnd.get("hour"))
        .set("minute", timeEnd.get("minute")),
    };
    dispatch(setRentDetails(searchData));
    navigate("/vehicles");
  };

  return (
    <form className="searchBar" onSubmit={handleSubmit}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <input
          placeholder="Location"
          value={location}
          onChange={handleLocationChange}
        />
        <div style={{ backgroundColor: "white", borderRadius: 6 }}>
          <DatePicker
            sx={{ width: 160 }}
            label="Start Date"
            value={startDate}
            onChange={handleStartDateChange}
          />
        </div>
        <TimePicker
          sx={{ width: 140 }}
          label="Time"
          value={startTime}
          onChange={handleStartTimeChange}
          views={["hours", "minutes"]}
        />
        <DatePicker
          sx={{ width: 160 }}
          label="End Date"
          value={endDate}
          onChange={handleEndDateChange}
        />
        <TimePicker
          sx={{ width: 140 }}
          label="Time"
          value={endTime}
          onChange={handleEndTimeChange}
          views={["hours", "minutes"]}
        />
      </LocalizationProvider>
      <button>Bigass</button>
    </form>
  );
};

export default SearchBar;
