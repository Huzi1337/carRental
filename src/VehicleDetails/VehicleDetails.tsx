import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../ReusableComponents/Navbar";
import Footer from "../ReusableComponents/Footer";
import Card from "../ReusableComponents/Card";
import Container from "../ReusableComponents/Container";
import { useNavigate } from "react-router-dom";

import "./VehicleDetails.scss";
import Button from "../ReusableComponents/Button";

import { API_URL } from "../assets/data/urls";
import { Car } from "../assets/data/types";

const VehicleDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [car, setCar] = useState<null | Car>(null);

  useEffect(() => {
    params.vehicleId
      ? fetch(`${API_URL}/carRental/Cars/${Number(params.vehicleId) - 1}.json`)
          .then((res) => res.json())
          .then((data) => setCar(data))
      : null;
  }, []);
  if (!car) return <h1>Loading...</h1>;

  const backButtonHandler = () => {
    navigate("/vehicles");
  };

  const bookButtonHandler = () => {
    navigate(`/booking/${params.vehicleId}`);
  };

  return (
    <>
      <Container className="container__details">
        <Navbar></Navbar>
        <Card
          src="/cars/modelName/bigaCar.png"
          className="card__details"
          tint={true}
        >
          <Button onClick={backButtonHandler} className="btn__back">
            <i></i>Back
          </Button>
          <div className="details__info">
            <div className="details__col large">
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
              <p>{car.desc}</p>
            </div>
            <div className="details__col small">
              <div className="details__date">
                <input></input>
                <input></input>
              </div>
              <h2>$420</h2>
              <span>$69 per 24h</span>
              <Button onClick={bookButtonHandler} className="btn__details">
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
