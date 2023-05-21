import { Fragment } from "react";

import Navbar from "./Navbar";
import Card from "../ReusableComponents/Card";
import Carousel from "../ReusableComponents/Carousel";
import Footer from "../ReusableComponents/Footer";
import Button from "../ReusableComponents/Button";
import GoogleMap from "./GoogleMap";

import { cars } from "../assets/cars/cars";
import { newPosts } from "../assets/newsHeadline/newPosts";
import { locationHeadline } from "../assets/location/locationHeadline";
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import "./LandingPage.scss";

const Home = () => {
  return (
    <div id="#home" className="section home">
      <div className="textBox">
        <h1>Rent-a-car with professionals.</h1>
        <h2>Feel the guarantee of safety with us.</h2>
      </div>
      <div className="searchBar">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div style={{ backgroundColor: "white", borderRadius: 6 }}>
            <DatePicker sx={{ width: 160 }} label="Pick-up Date"></DatePicker>
          </div>

          <TimePicker sx={{ width: 140 }} label="Time"></TimePicker>
          <DatePicker sx={{ width: 160 }} label="Drop-off Date"></DatePicker>
          <TimePicker sx={{ width: 140 }} label="Time"></TimePicker>
        </LocalizationProvider>
        <button>Bigass</button>
      </div>
    </div>
  );
};

const News = () => {
  const imageSliderPath = "src/assets/newCars";
  const imageHeadlinePath = "src/assets/newsHeadline";
  const imageCount = 4;

  return (
    <div id="#news" className="section news">
      <Carousel imagePath={imageSliderPath} imageCount={imageCount}></Carousel>
      <div className="container__horizontal">
        {newPosts.map((post, index) => (
          <Card
            src={imageHeadlinePath + `/car${index + 1}.png`}
            className="card__news"
            tint={false}
          >
            <h6>{post.content}</h6>
            <Button className="btn__news">Read more</Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

const Locations = () => {
  return (
    <div id="#locations" className="section location">
      <h4>Location in your Country</h4>
      <GoogleMap></GoogleMap>
      <div className="wrapper__location">
        <div className="container__horizontal">
          {locationHeadline.map(({ iconPath, title, subTitle }) => (
            <div className="container__vertical">
              <img src={iconPath} width="30px" height="30px"></img>
              <h3>{title}</h3>
              <h6>{subTitle}</h6>
            </div>
          ))}
        </div>
        <h5>Cities and airports where our points are located</h5>
        Warsaw, Krakow, Lodz, Wroclaw, Poznan, Gdansk, Szczecin, Bydgoszcz,
        Lublin, Katowice, Bialystok, Gdynia, Czestochowa, Radom, Sosnowiec,
        Torun, Kielce, Gliwice, Zabrze, Bytom, Bielsko-Biala, Rzeszow, Tychy,
        Dabrowa Gornicza, Plock, Elblag, Opole, Gorzow Wielkopolski, Walbrzych,
        Legnica, Tarnow, Chorzow, Kalisz, Nowy Sacz, Siedlce, Zamosc, Sopot,
        Krosno, Suwalki, Kwidzyn, Leszno, Myslenice, Ketrzyn, Ustka, Stargard
        Szczecinski.
      </div>
    </div>
  );
};

const Vehicles = () => {
  return (
    <div id="#vehicles" className="section vehicles">
      <h4>Cars</h4>
      <div className="cars__gridContainer">
        {cars.map((car, index) => (
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
            <Button className="btn__cars">Select Car</Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div id="#about" className="section about">
      <h4>About Us</h4>
      <div className="brandStory">
        <h1>Together on the road for 20 years.</h1>{" "}
        <h4>
          As a modern and constantly evolving company, we have utilized our
          extensive experience and passion for cars to establish a distinctive
          car rental service that caters to premium vehicles.
        </h4>
      </div>
      <div className="newsletter">
        <h3>Subscribe to the newsletter!</h3>
        <button>Sign up</button>
      </div>
    </div>
  );
};

const LandingPage = () => {
  return (
    <Fragment>
      <Navbar></Navbar>
      <Home></Home>
      <News></News>
      <Locations></Locations>
      <Vehicles></Vehicles>
      <About></About>
      <Footer></Footer>
    </Fragment>
  );
};

export default LandingPage;
