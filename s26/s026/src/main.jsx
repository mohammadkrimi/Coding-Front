import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./assets/index.css";

import ViewA from "./views/A";
import ViewB from "./views/B";
import ViewC from "./views/C";
import ViewD from "./views/D";
import ViewMenu from "./views/Menu";
import Nav from "./components/Nav";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<ViewMenu />} />
        <Route path="/a" element={<ViewA />} />
        <Route path="/b" element={<ViewB />} />
        <Route path="/c/*" element={<ViewC />} />
        <Route path="/d/:id/:name" element={<ViewD />} />
        {/* <Route path="/d" element={<ViewD />}>
          <Route path="inside" element={<ViewA />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
