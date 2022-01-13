import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import ProtectedRoute from "./protectedRoute";
import MainTemplate from "./../templates/mainTemplate";
import Home from "./../screens/home";
import { createBrowserHistory } from 'history'

const history = createBrowserHistory();


const MainRouter = () => {
  /**
   * checkForAllowedMenuAs in protected route is to check if its allowed in allowed menu list received in login response
   * ***/
  return (
    <Router history={history}>
      <Switch>
        <Route
          exact
          path="/"
          // component={Home}
          render={(props) => <MainTemplate path="/" component={Home} exact />}
        />        
      
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
};

export default MainRouter;
