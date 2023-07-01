import SearchBar from "../../ReusableComponents/SearchBar";
import "./Home.scss";

export const Home = () => {
  return (
    <div id="#home" className="section home">
      <div className="textBox">
        <h1>Rent-a-car with professionals.</h1>
        <h2>Feel the guarantee of safety with us.</h2>
      </div>
      <SearchBar key="searchBar" />
    </div>
  );
};
