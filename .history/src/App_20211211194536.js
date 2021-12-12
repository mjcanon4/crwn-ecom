import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import HomePage from "./pages/hats/hats.component";
import HomePage from "./pages/sneakers/sneakers.component";
import HomePage from "./pages/mens/mens.component";
import HomePage from "./pages/womens/womens.component";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/hats" element={<HatsPage />} />
      <Route exact path="sneakers" element={<SneakersPage />} />
      <Route exact path="mens" element={<MensPage />} />
      <Route exact path="womens" element={<WomensPage />} />
    </Routes>
  );
}

export default App;
