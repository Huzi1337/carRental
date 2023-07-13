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
  const markersRef = useRef<google.maps.Marker[]>([]);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
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
    if (mapLoaded) {
      const mapOptions: google.maps.MapOptions = {
        center: { lat: 51.9194, lng: 19.1451 },
        zoom: 6,
        disableDefaultUI: true,
      };

      const map = new google.maps.Map(mapRef.current!, mapOptions);
      mapInstanceRef.current = map;

      const markers = cities.map((city) => {
        const markerIcon = {
          url: "https://maps.google.com/mapfiles/ms/icons/blue.png",
          scaledSize: new google.maps.Size(32, 32),
          fillColor: "blue",
        };

        const marker = new google.maps.Marker({
          position: { lat: city.lat, lng: city.lng },
          title: city.name,
          map: map,
          icon: markerIcon,
        });
        return marker;
      });

      markersRef.current = markers;

      return () => {
        markersRef.current.forEach((marker) => {
          marker.setMap(null);
        });
        markersRef.current = [];

        if (mapInstanceRef.current) {
          mapInstanceRef.current = null;
        }
      };
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
