import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "../src/components/header/header.component.js";
import SignInAndSignUp from "../src/pages/sign-in-and-sign-up/sign-in-and-sign-up.component.js";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils.js";

import { setCurrentUser } from "./redux/user/user.actions.js";

class App extends React.Component {
  constructor() {

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
         this.props.setCurrentUser ({
              id: snapShot.id,
              ...snapShot.data(),
            }),
          });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

const mapToDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapToDispatchToProps)(App);
