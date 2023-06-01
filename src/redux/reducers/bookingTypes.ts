export type PersonalInfo = {
  firstName: string;
  lastName: string;
  birthDate: string;
  email: string;
  drivingLicenseId: string;
  phoneNumber: string;
};

export type PaymentInfo = {
  cardProvider: "MasterCard" | "Visa" | "Bitcoin";
  name: string;
  cardNumber: string;
  cvv: string;
  exp: string;
};

export type RentEssentials = {
  location: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
};

export type InitialState = {
  location: string;
  endDate: string;
  endTime: string;
  startTime: string;
  startDate: string;
  dropOffLocation: string;
  mileage: number;
  price: number;
  currentStep: number;
  personalInfo: undefined | PersonalInfo;
  payment: undefined | PaymentInfo;
};
