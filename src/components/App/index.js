import React from "react";
import * as ROUTES from "../../constants/routes";
import { BrowserRouter, Route } from "react-router-dom";

import Navigation from "../Navigation";
import Landing from "../Landing";
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import PasswordForget from "../PasswordForget";
import Home from "../Home";
import Account from "../Account";
import Admin from "../Admin";

import { withAuthentication } from "../Session";

const App = () => (
  <div>
    <BrowserRouter>
      <Navigation />
      <div className="container">
        <Route exact path={ROUTES.LANDING} component={Landing} />
        <Route exact path={ROUTES.SIGNUP} component={SignUp} />
        <Route exact path={ROUTES.SIGNIN} component={SignIn} />
        <Route exact path={ROUTES.PASSWORDFORGET} component={PasswordForget} />
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route exact path={ROUTES.ACCOUNT} component={Account} />
        <Route exact path={ROUTES.ADMIN} component={Admin} />
      </div>
    </BrowserRouter>
  </div>
);

export default withAuthentication(App);
