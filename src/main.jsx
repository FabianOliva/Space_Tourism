import React from "react";
import ReactDOM from "react-dom/client";
/* import App from "./App.jsx"; */
import "./index.css";
import Home from "./pages/Home/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Destination from "./pages/Destination/Destination.jsx";
import Crew from "./pages/Crew/Crew.jsx";
import Technologies from "./pages/Technologies/Technologies.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/destination",
    element: <Destination />,
  },
  {
    path: "/crew",
    element: <Crew />,
  },
  {
    path: "/technologies",
    element: <Technologies />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/*   <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
