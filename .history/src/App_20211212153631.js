import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => {
  return <h1>THIS IS THE HATS PAGE</h1>;
};

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/shop/hats" element={<HatsPage />} />
    </Routes>
  );
}

export default App;
