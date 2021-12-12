import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

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
      <Router>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
