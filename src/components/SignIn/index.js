import React, { Component } from "react";
import { Link } from "react-router-dom";
import { SIGNIN } from "../../constants/routes";
import { SignUpLink } from "../SignUp";
import { PasswordForgetLink } from "../PasswordForget";
import FormField from "../_Library/FormField";
import "./signin.css";
import * as AUTH from "../../actions/authActions";
import { connect } from "react-redux";
import { withAuthentication } from "../Session";
import { HOME } from "../../constants/routes";

class SignIn extends Component {
  state = {
    username: "",
    password: ""
  };
  successful = () => {
    this.props.history.push(HOME);
  };
  failure = error => {
    console.log("Login failed:");
    console.log(error);
    this.setState({ username: "", password: "" });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.login(
      this.state.username,
      this.state.password,
      this.props.firebase,
      this.successful,
      this.failure
    );
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

export default connect(
  null,
  AUTH.mapDispatchToProps
)(withAuthentication(SignIn));
