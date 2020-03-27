import React, { Component } from "react";
// import SignUp from "../SignUp";
import PasswordChange from "../PasswordChange";

class Account extends Component {
  render() {
    return (
      <div>
        <section>
          <h5>Update Account Information</h5>
          {/* <SignUp />  */}
        </section>
        <hr />
        <section>
          <h5>Change Password</h5>
          <PasswordChange />
        </section>
      </div>
    );
  }
}

export default Account;
