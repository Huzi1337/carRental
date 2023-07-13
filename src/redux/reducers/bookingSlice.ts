import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  IPersonalInfo,
  InitialState,
  IRentEssentials,
  IPaymentInfo,
  IBookingDetails,
  IRentOptions,
  IRentDate,
} from "./bookingTypes";
import dayjs from "dayjs";

const INITIAL_STATE: InitialState = {
  location: "Ass Town",
  startDate: dayjs().toISOString(),

  endDate: dayjs()
    .set("date", dayjs().date() + 1)
    .toISOString(),

  dropOffLocation: "",
  mileage: 10,
  price: 0,
  isComplete: false,

  firstName: "",
  lastName: "",
  birthDate: "",
  email: "",
  drivingLicenseId: "",
  phoneNumber: "",

  cardProvider: "MasterCard",
  name: "",
  cardNumber: "",
  cvv: "",
  exp: "",
  pricePerDay: 1,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState: INITIAL_STATE,
  reducers: {
    setRentState: (
      state,
      action: PayloadAction<
        | IRentEssentials
        | IBookingDetails
        | IRentOptions
        | IPersonalInfo
        | IPaymentInfo
        | IRentDate
      >
    ) => {
      return { ...state, ...action.payload };
    },
    setPricePerDay: (state, action: PayloadAction<number>) => {
      console.log(action.payload);
      return { ...state, pricePerDay: action.payload };
    },
    setIsComplete: (state) => {
      return { ...state, isComplete: true };
    },
    resetState: () => INITIAL_STATE,
  },
});

export const { setRentState, setPricePerDay, setIsComplete, resetState } =
  bookingSlice.actions;
export default bookingSlice.reducer;
