import React from "react";
import NavBar from "./components/navBar";
import {Redirect, Route, Switch} from "react-router-dom";
import Main from "./layouts/mainLayout/main";
import Users from "./layouts/usersLayout";
import Login from "./layouts/loginLayout/login";

const App = () => {
  return (
    <>
      <NavBar/>
      <Switch>
        <Route path="/users/:userId?" component={Users} />
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Main} />
        <Redirect from="/fast-company" to="/users" />
      </Switch>
    </>
  );
};

export default App;
