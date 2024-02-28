import React, { useRef, useEffect, useState } from "react";

import "./GoogleMap.scss";

interface City {
  name: string;
  lat: number;
  lng: number;
}

const cities: City[] = [
  { name: "Warsaw", lat: 52.2297, lng: 21.0122 },
  { name: "Krakow", lat: 50.0647, lng: 19.945 },
  { name: "Lodz", lat: 51.7592, lng: 19.455 },
  { name: "Wroclaw", lat: 51.1079, lng: 17.0385 },
  { name: "Poznan", lat: 52.4064, lng: 16.9252 },
  { name: "Gdansk", lat: 54.352, lng: 18.6466 },
];

const GoogleMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    const loadMapScript = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBoM2bSm8V4Fj1Mj2YSradgmcPIL7jUD6U&callback=initMap`;
      script.defer = true;
      script.async = true;
      script.addEventListener("load", handleScriptLoad);
      document.body.appendChild(script);
    };

    const handleScriptLoad = () => {
      setMapLoaded(true);
    };

    if (!window.google || !window.google.maps) {
      (window as any).initMap = handleScriptLoad;
      loadMapScript();
    } else {
      setMapLoaded(true);
    }
  }, []);

  useEffect(() => {
    initMap();

    async function initMap() {
      // Request needed libraries.

      const { current } = mapRef;
      if (current) {
        const { Map } = (await google.maps.importLibrary(
          "maps"
        )) as google.maps.MapsLibrary;
        const { AdvancedMarkerElement, PinElement } =
          (await google.maps.importLibrary(
            "marker"
          )) as google.maps.MarkerLibrary;

        const map = new Map(current as HTMLElement, {
          center: { lat: 52.4194, lng: 19.1451 },
          zoom: 6,
          disableDefaultUI: true,
          mapId: "4504f8b37365c3d0",
        });

        cities.forEach((city) => {
          const { lat, lng } = city;
          const pinOptions = new PinElement({
            background: "#2A6FDB",
            glyphColor: "#FFFFFF",
            borderColor: "#2A6FDB",
          });
          new AdvancedMarkerElement({
            map,
            position: { lat, lng },
            content: pinOptions.element,
          });
        });
      }
    }
  }, [mapLoaded]);

  return (
    <div
      ref={mapRef}
      className="locations__googleMap"
      style={{ overflow: "auto" }}
    ></div>
  );
};

export default GoogleMap;
