import Navbar from "../ReusableComponents/Navbar";
import Footer from "../ReusableComponents/Footer";

import "./LandingPage.scss";
import { Home } from "./sections/Home";
import { Locations } from "./sections/Locations";
import { Vehicles } from "./sections/Vehicles";
import { News } from "./sections/News";
import { About } from "./sections/About";

const LandingPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <News></News>
      <Locations></Locations>
      <Vehicles numberOfCars={8}></Vehicles>
      <About></About>
      <Footer></Footer>
    </>
  );
};

export default LandingPage;
