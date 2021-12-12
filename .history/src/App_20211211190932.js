import React from "react";
import { Route, Routes } from "react-router-dom";

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
      <Routes>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Routes>
    </div>
  );
}

export default App;
