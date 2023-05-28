import LandingPage from "./LandingPage/LandingPage";
import VehicleDetails from "./VehicleDetails/VehicleDetails";
import Booking from "./Booking/Booking";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.scss";
import VehiclePage from "./VehiclePage/Vehicles";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage></LandingPage> },
  { path: "/vehicles/:vehicleId", element: <VehicleDetails></VehicleDetails> },
  { path: "/booking/:vehicleId", element: <Booking></Booking> },
  { path: "/vehicles", element: <VehiclePage></VehiclePage> },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
