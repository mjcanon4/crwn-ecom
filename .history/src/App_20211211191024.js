import React from "react";
import { Route, Router } from "react-router-dom";

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
      </Router>
    </div>
  );
}

export default App;
