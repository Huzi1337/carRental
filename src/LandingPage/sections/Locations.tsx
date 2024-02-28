import GoogleMap from "../GoogleMap";
import { locationHeadline } from "../../assets/location/locationHeadline";

import "./Locations.scss";

export const Locations = () => {
  return (
    <div id="#locations" className="section location">
      <h4>Location in your Country</h4>
      <GoogleMap />
      <div className="wrapper__location">
        <div className="container__horizontal">
          {locationHeadline.map(({ iconPath, title, subTitle }, index) => (
            <div key={index} className="container__vertical">
              <img src={iconPath} className="location__image"></img>
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
