import { Home } from "../LandingPage/sections/Home";
import { Vehicles } from "../LandingPage/sections/Vehicles";

const VehiclePage = () => {
  return (
    <>
      <Home />
      <Vehicles numberOfCars={16}></Vehicles>
    </>
  );
};

export default VehiclePage;
