import React, { Component } from "react";
import FormField from "../_Library/FormField";
import "../SignIn/signin.css";

class Auth extends Component {
  render() {
    return (
      <div>
        <FormField
          type="email"
          keyName="username"
          displayText="Email"
          onChange={this.props.handleChange}
        />
        <FormField
          type="password"
          keyName="password"
          displayText="Password"
          onChange={this.props.handleChange}
        />
        <FormField
          type="password"
          keyName="confirm_password"
          displayText="Confirm Password"
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}

export default Auth;
