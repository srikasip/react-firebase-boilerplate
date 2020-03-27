import React, { Component } from "react";
import FormField from "../_Library/FormField";
import "../SignIn/signin.css";
import { Link } from "react-router-dom";
import { PASSWORDFORGET } from "../../constants/routes";

class PasswordForget extends Component {
  state = {
    username: "",
    error: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  render() {
    const isInvalid = this.state.username === "";
    return (
      <div className="container signInForm">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Recover Account Password</h5>
          {/* INSERT ADDITIONAL USER DATA FIELDS HERE NEW DATA HERE */}
          <FormField
            type="email"
            keyName="username"
            displayText="Email"
            onChange={this.handleChange}
          />
          <div className="input-field">
            <button
              disabled={isInvalid}
              className="btn teal lighten-1 z-depth-0"
            >
              Send Password Recovery Email
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export const PasswordForgetLink = ({ className }) => (
  <Link className={className} to={PASSWORDFORGET}>
    Recover Account Password
  </Link>
);

export default PasswordForget;
