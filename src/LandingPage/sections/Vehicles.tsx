import Card from "../../ReusableComponents/Card";
import Button from "../../ReusableComponents/Button";
import { useEffect, useState } from "react";
import { API_URL } from "../../assets/data/urls";
import { Car } from "../../assets/data/types";
import { useNavigate } from "react-router-dom";

import "./Vehicles.scss";

interface Props {
  numberOfCars: number;
  location?: string;
}

export const Vehicles = ({ numberOfCars, location }: Props) => {
  const [cars, setCars] = useState<null | Car[]>(null);
  const navigate = useNavigate();

  const buttonHandler = (id: number) => {
    navigate(`/vehicles/${id}`);
  };

  useEffect(() => {
    fetch(
      `${API_URL}/carRental/Cars.json?orderBy="id"&limitToFirst=${numberOfCars}`
    )
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  return (
    <div id="#vehicles" className="section vehicles">
      <h4>{location ? `Available Cars in ${location}` : "Cars"}</h4>
      <div className="cars__gridContainer">
        {cars ? (
          cars.map((car, index) => (
            <Card
              src={car.photo}
              className="card__vehicles"
              key={index}
              tint={true}
            >
              <div className="cars__itemInfo">
                <h4>{car.modelName}</h4>
                <div className="cars__details">
                  <span>
                    POWER: {car.power} <br />
                    FUEL TYPE: {car.fuelType} <br />
                    TRANSMISSION: {car.transmission}
                  </span>
                  <h6 className="cars__price">${car.price}</h6>
                </div>
              </div>
              <Button
                onClick={() => buttonHandler(car.id)}
                className="btn__cars"
              >
                Select Car
              </Button>
            </Card>
          ))
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    </div>
  );
};
