import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

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
      <BrowserRouter>
        <Routes>
          <Route exact path component={HomePage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;