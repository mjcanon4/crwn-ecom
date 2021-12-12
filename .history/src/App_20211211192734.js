import React from "react";
import { Link, BrowserRouter as Router, Switch } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => {
  <div>
    <h1>This is the hats page</h1>
  </div>;
};

function App() {
  return (
    <Router>
      <Switch>
        <Link exact path="/" component={HomePage} />
        <Link exact path="/hats" component={HatsPage} />
      </Switch>
    </Router>
  );
}

export default App;
