import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "../ReusableComponents/Footer";
import Card from "../ReusableComponents/Card";
import Container from "../ReusableComponents/Container";
import { useNavigate } from "react-router-dom";
import { DateTimePicker } from "@mantine/dates";
import { UseFormReturnType, useForm } from "@mantine/form";
import { useSelector, useDispatch } from "react-redux";

import "./VehicleDetails.scss";
import Button from "../ReusableComponents/Button";

import { API_URL } from "../assets/data/urls";
import { Car } from "../assets/data/types";
import { RootState } from "../redux/store";
import { setPricePerDay, setRentState } from "../redux/reducers/bookingSlice";

import { calculateRentCost } from "../utils/calculateRentCost";

import dayjs from "dayjs";

interface RentDateConfirmation {
  startDate: Date;
  endDate: Date;
}

const VehicleDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const [car, setCar] = useState<null | Car>(null);
  const { startDate, endDate, location } = useSelector(
    (state: RootState) => state.booking
  );
  const form = useForm<RentDateConfirmation>({
    initialValues: {
      startDate: dayjs(startDate).toDate(),
      endDate: dayjs(endDate).toDate(),
    },
    validate: {
      startDate: (value) =>
        value ? null : "Provide the starting date and time.",
      endDate: (value) => (value ? null : "Provide the ending date and time."),
    },
  });

  useEffect(() => {
    params.vehicleId
      ? fetch(`${API_URL}/carRental/Cars/${Number(params.vehicleId) - 1}.json`)
          .then((res) => res.json())
          .then((data: Car) => {
            dispatch(setPricePerDay(data.price));
            return setCar(data);
          })
      : null;
  }, []);
  if (!car) return <h1>Loading...</h1>;

  const backButtonHandler = () => {
    navigate("/vehicles");
  };

  const bookButtonHandler = ({
    values: { startDate, endDate },
  }: UseFormReturnType<RentDateConfirmation>) => {
    dispatch(
      setRentState({
        location,
        startDate: dayjs(startDate).toISOString(),
        endDate: dayjs(endDate).toISOString(),
      })
    );
    navigate(`/booking/${params.vehicleId}`);
  };

  return (
    <>
      <Container className="container__details">
        <Card
          src="/cars/modelName/bigaCar.png"
          className="card__details"
          tint={true}
        >
          <Button onClick={backButtonHandler} className="btn__back strong">
            <i></i>Back
          </Button>
          <div className="details__info">
            <div className="details__col">
              <h3>{car.modelName}</h3>
              <div className="details__row">
                <h6>
                  Body type: {car.bodyType} <br /> Power: {car.power} <br />{" "}
                  Fuel type: {car.fuelType}
                </h6>
                <h6>
                  Transmission: {car.transmission} <br /> Number of Places:{" "}
                  {car.numberOfSeats}
                  <br /> Auto segment: {car.carSegment}
                </h6>
              </div>
              <p className="details__carDesc">{car.desc}</p>
            </div>
            <div className="details__col small">
              <div className="details__date">
                <DateTimePicker
                  {...form.getInputProps("startDate")}
                  variant="unstyled"
                  valueFormat="ddd DD MMM, YYYY hh:mm a"
                />
                <DateTimePicker
                  {...form.getInputProps("endDate")}
                  variant="unstyled"
                  valueFormat="ddd DD MMM, YYYY hh:mm a"
                />
              </div>
              <h2>
                $
                {calculateRentCost(
                  form.values.startDate,
                  form.values.endDate,
                  car.price
                )}
              </h2>
              <span>${car.price} per 24h</span>
              <Button
                onClick={() => bookButtonHandler(form)}
                className="btn__details"
              >
                Book
              </Button>
            </div>
          </div>
          {params.id}
        </Card>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default VehicleDetails;
