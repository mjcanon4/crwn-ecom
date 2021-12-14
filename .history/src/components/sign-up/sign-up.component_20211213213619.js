import React from "react";

import FormInput from "../form-input/form-input.component.js";
import CustomButton from "../custom-button/custom-button.component.js";

import {
  auth,
  createUserProfileDocument,
} from "../../firebase/firebase.utils.js";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account yet</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onchange={this.handleChange}
            label="Display Name"
            required
          />
        </form>
      </div>
    );
  }
}
