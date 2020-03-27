import React, { Component } from "react";
import { Link } from "react-router-dom";
import { SIGNIN } from "../../constants/routes";
import { SignUpLink } from "../SignUp";
import { PasswordForgetLink } from "../PasswordForget";
import FormField from "../_Library/FormField";
import "./signin.css";

class SignIn extends Component {
  state = {
    username: "",
    password: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  render() {
    const { username, password } = this.state;
    const isInvalid = password === "" || username === "";
    return (
      <div className="container signInForm">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          {/* INSERT ADDITIONAL USER DATA FIELDS HERE NEW DATA HERE */}
          <FormField
            type="email"
            keyName="username"
            displayText="Email"
            onChange={this.handleChange}
          />
          <FormField
            type="password"
            keyName="password"
            displayText="Password"
            onChange={this.handleChange}
          />

          <div className="input-field">
            <button
              disabled={isInvalid}
              className="btn teal lighten-1 z-depth-0"
            >
              Sign In
            </button>
          </div>
        </form>
        <p>
          Don't have an account yet? <SignUpLink />
        </p>
        <p>
          Forgot your password? <PasswordForgetLink />
        </p>
      </div>
    );
  }
}

export const SignInButton = () => (
  <Link className="btn btn-flat teal white-text" to={SIGNIN}>
    Sign In
  </Link>
);

export default SignIn;
