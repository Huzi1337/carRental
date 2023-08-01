import dayjs from "dayjs";

export const calculateRentCost = (
  startDate: Date,
  endDate: Date,
  price: number,
  insurance: number = 0,
  mileage: number = 100
) => {
  const rentDuration = dayjs(endDate).diff(dayjs(startDate), "days");
  const rentCost = rentDuration * (price + insurance) + mileage - 100;
  return rentCost > 0 ? rentCost : 0;
};
