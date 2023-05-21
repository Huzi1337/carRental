import LandingPage from "./LandingPage/LandingPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.scss";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage></LandingPage> },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
