import React from "react";
import { Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => {
  <div>
    <h1>This is the hats page</h1>
  </div>;
};

function App() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
