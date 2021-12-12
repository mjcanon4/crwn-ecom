import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => (
  <div>
    <h1>This is a hats page</h1>
  </div>
);

function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="shop/hats" element={<HatsPage />} />
    </Routes>
  );
}

export default App;
