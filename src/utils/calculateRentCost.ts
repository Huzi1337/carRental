import dayjs from "dayjs";

export const calculateRentCost = (
  startDate: Date,
  endDate: Date,
  price: number
) => {
  return dayjs(endDate).diff(dayjs(startDate), "days") * price;
};
