import React, { useRef, useEffect } from "react";

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
  const markersRef = useRef<globalThis.google.maps.Marker[]>([]);
  const mapInstanceRef = useRef<globalThis.google.maps.Map | null>(null);

  useEffect(() => {
    const mapOptions: globalThis.google.maps.MapOptions = {
      center: { lat: 51.9194, lng: 19.1451 }, // Center of Poland
      zoom: 6,
      disableDefaultUI: true,
    };

    const map = new window.google.maps.Map(mapRef.current!, mapOptions);
    mapInstanceRef.current = map;

    const markers = cities.map((city) => {
      const markerIcon = {
        url: "https://maps.google.com/mapfiles/ms/icons/blue.png", // URL of the default pin icon
        scaledSize: new window.google.maps.Size(32, 32), // Set the desired size of the marker icon
        fillColor: "blue", // Change the marker color here
      };

      const marker = new window.google.maps.Marker({
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
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "50%" }}></div>;
};

export default GoogleMap;
