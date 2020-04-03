import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";
import paths from "../../config/sitepaths";

import { SignOutButton } from "../SignOut";
import { SignInButton } from "../SignIn";
import { SignUpLink } from "../SignUp";
import { withAuthentication } from "../Session";

class Navigation extends Component {
  componentDidMount() {
    M.Sidenav.init(this.sidenav);
  }

  render() {
    return (
      <div>
        <nav className="nav-wrapper grey darken-3 z-index-0">
          <div className="container">
            <Link to="/" className="brand-logo">
              [INSERT PROJECT NAME HERE]
            </Link>
            <a href="#" data-target="mobileMenu" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <div className="links right hide-on-med-and-down">
              {this.props.auth !== null ? (
                <NavigationAuth linkClass="titleFont white-text" />
              ) : (
                <NavigationNonAuth linkClass="titleFont white-text" />
              )}
            </div>
          </div>
        </nav>
        <div
          className="sidenav grey darken-3 white-text"
          id="mobileMenu"
          ref={(sidenav) => {
            this.sidenav = sidenav;
          }}
        >
          {this.props.auth !== null ? (
            <NavigationNonAuth linkClass="titleFont white-text" />
          ) : (
            <NavigationAuth linkClass="titleFont white-text" />
          )}
        </div>
      </div>
    );
  }
}
const NavigationAuth = ({ linkClass }) => (
  <ul>
    {paths.authenticated.map((path) => {
      return (
        <li key={path.displayText + "__NavLink"}>
          <Link className={linkClass} to={path.route}>
            {path.displayText}
          </Link>
        </li>
      );
    })}
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = ({ linkClass }) => (
  <ul>
    {paths.non_authenticated.map((path) => {
      return (
        <li key={path.displayText + "__NavLink"}>
          <Link className={linkClass} to={path.route}>
            {path.displayText}
          </Link>
        </li>
      );
    })}
    <li>
      <SignInButton />
    </li>
    <li>
      <SignUpLink className={linkClass} />
    </li>
  </ul>
);

export default withAuthentication(Navigation);
