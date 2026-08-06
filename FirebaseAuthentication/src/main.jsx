import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app.css";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from "./Router/Root";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "/login",
        Component: Login
      }
    ]
  },


]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);