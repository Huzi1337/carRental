import dayjs from "dayjs";

export type PersonalInfo = {
  firstName: string;
  lastName: string;
  birthDate: dayjs.Dayjs | null;
  email: string;
  drivingLicenseId: string;
  phoneNumber: string;
};

export type PaymentInfo = {
  cardProvider: "MasterCard" | "Visa" | "Bitcoin";
  name: string;
  cardNumber: string;
  cvv: string;
  exp: dayjs.Dayjs | null;
};

export type RentEssentials = {
  location: string;
  startDate: dayjs.Dayjs | null;
  endDate: dayjs.Dayjs | null;
};

export type InitialState = {
  location: string;
  endDate: dayjs.Dayjs | null;
  startDate: dayjs.Dayjs | null;
  dropOffLocation: undefined | string;
  mileage: number;
  price: number;
  currentStep: number;
  personalInfo: undefined | PersonalInfo;
  payment: undefined | PaymentInfo;
};
