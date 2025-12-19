import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./assets/index.css";
import Canban from "./views/Canban";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Canban />
    </BrowserRouter>
  </StrictMode>
);
