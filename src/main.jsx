import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./Components/Main-Style/Layout/Deshboard/Layout";
import { RouterProvider } from "react-router-dom";
import AuthContextProvider from "./🟢AuthProvider/AuthContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <AuthContextProvider>
    <RouterProvider router={router}></RouterProvider>
  </AuthContextProvider>
  </React.StrictMode>
);
