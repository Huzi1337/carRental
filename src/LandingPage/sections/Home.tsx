import { useEffect, useState } from "react";
import SearchBar from "../../ReusableComponents/SearchBar";
import "./Home.scss";

const imageURL = "/home-background.png";

export const Home = () => {
  const [backgroundImageLoaded, setBackgroundImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = imageURL;
    img.onload = () => {
      setBackgroundImageLoaded(true);
    };
  }, []);

  return (
    <div
      id="#home"
      className={`section home ${backgroundImageLoaded ? "loaded" : "pending"}`}
    >
      <div className="textBox">
        <h1>Rent-a-car with professionals.</h1>
        <h2>Feel the guarantee of safety with us.</h2>
      </div>
      <SearchBar key="searchBar" />
    </div>
  );
};
