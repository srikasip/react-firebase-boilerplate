import React, { Component } from "react";
import * as ROUTES from "../../constants/routes";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Navigation from "../Navigation";
import Landing from "../Landing";
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import PasswordForget from "../PasswordForget";
import Home from "../Home";
import Account from "../Account";
import Admin from "../Admin";

import { withAuthentication } from "../Session";

class App extends Component {
  isLoggedIn = () => {
    return !!this.props.auth;
  };

  render() {
    console.log(this);
    return (
      <div>
        <BrowserRouter>
          <Navigation />
          <div className="container">
            <Switch>
              <Route exact path={ROUTES.LANDING} component={Landing} />
              <Route
                exact
                path={ROUTES.SIGNUP}
                render={() =>
                  this.isLoggedIn() ? <Redirect to={ROUTES.HOME} /> : <SignUp />
                }
              />
              <Route
                exact
                path={ROUTES.SIGNIN}
                render={() =>
                  this.isLoggedIn() ? <Redirect to={ROUTES.HOME} /> : <SignIn />
                }
              />
              <Route
                exact
                path={ROUTES.PASSWORDFORGET}
                component={PasswordForget}
              />
              <Route
                exact
                path={ROUTES.HOME}
                render={() =>
                  this.isLoggedIn() ? <Home /> : <Redirect to={ROUTES.SIGNIN} />
                }
              />
              <Route
                exact
                path={ROUTES.ACCOUNT}
                render={() =>
                  this.isLoggedIn() ? (
                    <Account />
                  ) : (
                    <Redirect to={ROUTES.SIGNIN} />
                  )
                }
              />
              <Route
                exact
                path={ROUTES.ADMIN}
                render={() =>
                  this.isLoggedIn() ? (
                    <Admin />
                  ) : (
                    <Redirect to={ROUTES.SIGNIN} />
                  )
                }
              />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default withAuthentication(App);
