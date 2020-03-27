import React, { Component } from "react";
import { Link } from "react-router-dom";
import { LANDING } from "../../constants/routes";

export class SignOutButton extends Component {
  onSignOutClick = e => {
    console.log(e);
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
