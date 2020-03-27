import React, { Component } from "react";
import FormField from "../_Library/FormField";
import "../SignIn/signin.css";

class PasswordChange extends Component {
  state = {
    username: "",
    password: "",
    confirmPassword: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  render() {
    return (
      <div className="container signInForm">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Change Password</h5>
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
          <FormField
            type="password"
            keyName="confirm_password"
            displayText="Confirm Password"
            onChange={this.handleChange}
          />

          <div className="input-field">
            <button className="btn teal lighten-1 z-depth-0">
              Change Password
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default PasswordChange;
