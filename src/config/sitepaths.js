import * as ROUTES from "../constants/routes";

const paths = {
  authenticated: [
    { displayText: "Home", route: ROUTES.LANDING },
    { displayText: "Dashboard", route: ROUTES.HOME },
    { displayText: "Account", route: ROUTES.ACCOUNT }
  ],
  non_authenticated: [{ displayText: "Home", route: ROUTES.LANDING }]
};

export default paths;
