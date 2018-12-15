import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./../component/Auth/Login";
import SingUp from "./../component/Auth/Signup";
import Home from "./../App";

const AppRouters = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/sing-up" component={SingUp} />
  </Switch>
);
export default AppRouters;
