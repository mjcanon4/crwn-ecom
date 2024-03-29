import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
