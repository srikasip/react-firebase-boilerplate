import React, { Component } from "react";
import { Link } from "react-router-dom";
import { LANDING } from "../../constants/routes";
import * as AUTH from "../../actions/authActions";
import { connect } from "react-redux";
import { withAuthentication } from "../Session";

class SignOutBtn extends Component {
  onSignOutClick = e => {
    this.props.logout(this.props.firebase);
  };

  render() {
    return (
      <Link
        className="btn white btn-flat"
        onClick={this.onSignOutClick}
        to={LANDING}
      >
        Sign Out
      </Link>
    );
  }
}
export const SignOutButton = connect(
  null,
  AUTH.mapDispatchToProps
)(withAuthentication(SignOutBtn));
