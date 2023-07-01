export interface PersonalInfo {
  firstName: string;
  lastName: string;
  birthDate: string;
  email: string;
  drivingLicenseId: string;
  phoneNumber: string;
}

export interface PaymentInfo {
  cardProvider: "MasterCard" | "Visa" | "Bitcoin";
  name: string;
  cardNumber: string;
  cvv: string;
  exp: string;
}

export interface RentEssentials {
  location: string;
  startDate: string;

  endDate: string;
}

export interface BookingDetails extends RentEssentials {
  dropOffLocation: string;
}

export interface RentOptions {
  price: number;
  mileage: number;
}

export interface BookingProcessDetails {
  dropOffLocation: string;
  isComplete: boolean;
}

export interface InitialState
  extends PersonalInfo,
    PaymentInfo,
    RentEssentials,
    RentOptions,
    BookingProcessDetails {}

export interface FormInitialState
  extends PersonalInfo,
    PaymentInfo,
    RentOptions,
    BookingProcessDetails {
  location: string;
  startDate: Date;
  endDate: Date;
}
