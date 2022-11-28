import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Main from "./pages/main";
import Detail from "./pages/detail";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/aboutus",
    element: <Main />,
  },
  {
    path: "/detail/:donationId",
    element: <Detail />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
