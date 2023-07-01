import { Home } from "../LandingPage/sections/Home";
import { Vehicles } from "../LandingPage/sections/Vehicles";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const VehiclePage = () => {
  const { location } = useSelector((state: RootState) => state.booking);

  return (
    <>
      <Home />
      <Vehicles numberOfCars={16} location={location}></Vehicles>
    </>
  );
};

export default VehiclePage;
