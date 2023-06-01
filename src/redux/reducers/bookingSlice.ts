import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import {
  PersonalInfo,
  InitialState,
  RentEssentials,
  PaymentInfo,
} from "./bookingTypes";

const INITIAL_STATE: InitialState = {
  location: "",
  startDate: dayjs().toISOString(),
  startTime: dayjs().toISOString(),
  endDate: dayjs().toISOString(),
  endTime: dayjs().toISOString(),
  dropOffLocation: "",
  mileage: 10,
  price: 0,
  currentStep: 0,
  personalInfo: {
    firstName: "",
    lastName: "",
    birthDate: "",
    email: "",
    drivingLicenseId: "",
    phoneNumber: "",
  },
  payment: {
    cardProvider: "MasterCard",
    name: "",
    cardNumber: "",
    cvv: "",
    exp: "",
  },
};

const bookingSlice = createSlice({
  name: "booking",
  initialState: INITIAL_STATE,
  reducers: {
    setRentDetails: (state, action: PayloadAction<RentEssentials>) => {
      state = { ...state, ...action.payload };
    },
    setPersonalInfo: (state, action: PayloadAction<PersonalInfo>) => {
      state.personalInfo = action.payload;
    },
    setPaymentInfo: (state, action: PayloadAction<PaymentInfo>) => {
      state.payment = action.payload;
    },
    nextStep: (state) => {
      if (state.currentStep < 4) state.currentStep++;
    },
    prevStep: (state) => {
      if (state.currentStep > 0) state.currentStep--;
    },
    resetStep: (state) => {
      state.currentStep = 0;
    },
  },
});

export const {
  setRentDetails,
  setPaymentInfo,
  setPersonalInfo,
  nextStep,
  prevStep,
  resetStep,
} = bookingSlice.actions;
export default bookingSlice.reducer;
