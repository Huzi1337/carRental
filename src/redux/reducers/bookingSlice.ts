import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  PersonalInfo,
  InitialState,
  RentEssentials,
  PaymentInfo,
  BookingDetails,
  RentOptions,
} from "./bookingTypes";

const INITIAL_STATE: InitialState = {
  location: "Ass Town",
  startDate: "",

  endDate: "",

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
};

const bookingSlice = createSlice({
  name: "booking",
  initialState: INITIAL_STATE,
  reducers: {
    setRentState: (
      state,
      action: PayloadAction<
        | RentEssentials
        | BookingDetails
        | RentOptions
        | PersonalInfo
        | PaymentInfo
      >
    ) => {
      return { ...state, ...action.payload };
    },
    setIsComplete: (state) => {
      return { ...state, isComplete: true };
    },
    resetState: () => INITIAL_STATE,
  },
});

export const { setRentState, setIsComplete, resetState } = bookingSlice.actions;
export default bookingSlice.reducer;
