import { Router } from "express";
import React from "react";
import { Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => {
  <div>
    <h3>This is the hats page</h3>
  </div>;
};

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/HatsPage" component={HatsPage} />
      </Router>
    </div>
  );
}

export default App;
