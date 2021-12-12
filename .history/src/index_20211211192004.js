import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes } from "react-router-dom";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <App />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
