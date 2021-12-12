import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

const HatsPage = () => (
  <div>
    <h1>This is a hats page</h1>
  </div>
);

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="shop" element={ShopPage} />
    </Switch>
  );
}

export default App;
