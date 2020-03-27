import React, { Component } from "react";
import { Link } from "react-router-dom";
import { SIGNUP } from "../../constants/routes";
import "../SignIn/signin.css";
import NonAuth from "../User/NonAuth";
import Auth from "../User/Auth";
import * as AUTH from "../../actions/authActions";
import { connect } from "react-redux";
import { withAuthentication } from "../Session";
import { HOME } from "../../constants/routes";

class SignUp extends Component {
  state = {
    username: "",
    password: "",
    confirm_password: ""
  };

  successful = () => {
    this.props.history.push(HOME);
  };
  failure = error => {
    console.log("Login failed:");
    console.log(error);
    this.setState({ username: "", password: "", confirm_password: "" });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.signup(
      this.state,
      this.props.firebase,
      this.successful,
      this.failure
    );
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  render() {
    const { username, password, confirm_password } = this.state;

    const isInvalid =
      password !== confirm_password || password === "" || username === "";

    return (
      <div className="container signInForm">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          {/* INSERT ADDITIONAL USER DATA FIELDS HERE NEW DATA HERE */}

          <Auth handleChange={this.handleChange} />
          <NonAuth handleChange={this.handleChange} />

          <div className="input-field">
            <button
              disabled={isInvalid}
              className="btn teal lighten-1 z-depth-0"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export const SignUpLink = ({ className }) => (
  <Link className={className} to={SIGNUP}>
    Sign Up
  </Link>
);

export default connect(
  null,
  AUTH.mapDispatchToProps
)(withAuthentication(SignUp));
