import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "../src/components/header/header.component.js";
import SignInAndSignUp from '../src/pages/sign-in-and-sign-up/sign-in-and-sign-up.component.js
'

const HatsPage = () => (
  <div>
    <h1>This is a hats page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
