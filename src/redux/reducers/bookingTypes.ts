export interface IPersonalInfo {
  firstName: string;
  lastName: string;
  birthDate: string;
  email: string;
  drivingLicenseId: string;
  phoneNumber: string;
}

export class PersonalInfo implements IPersonalInfo {
  constructor(
    public firstName: string = "",
    public lastName: string = "",
    public birthDate: string = "",
    public email: string = "",
    public drivingLicenseId: string = "",
    public phoneNumber: string = ""
  ) {}
}

export interface IPaymentInfo {
  cardProvider: "MasterCard" | "Visa" | "Bitcoin";
  name: string;
  cardNumber: string;
  cvv: string;
  exp: string;
}

export interface IRentDate {
  startDate: string;
  endDate: string;
}

export interface IRentEssentials extends IRentDate {
  location: string;
}

export interface IBookingDetails extends IRentEssentials {
  dropOffLocation: string;
}

export interface IRentOptions {
  price: number;
  mileage: number;
}

export interface IBookingProcessDetails {
  dropOffLocation: string;
  isComplete: boolean;
}

export interface InitialState
  extends IPersonalInfo,
    IPaymentInfo,
    IRentEssentials,
    IRentOptions,
    IBookingProcessDetails {
  pricePerDay: number;
}

export interface IFormInitialState
  extends IPersonalInfo,
    IPaymentInfo,
    IRentOptions,
    IBookingProcessDetails {
  location: string;
  startDate: Date;
  endDate: Date;
}
