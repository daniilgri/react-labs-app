import React from "react";
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "../components/global/PrivateRoute";
import Profile from "../pages/Profile";
import BulletinBoard from "../pages/BulletinBoard";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Error404 from "../pages/Error404";
import NewFilm from "../pages/admin/NewFilm";

import { Wrapper } from "./styles";

const component = () => (
  <Wrapper>
    <Switch>
      <PrivateRoute path="/profile">
        <Profile />
      </PrivateRoute>
      <Route exact path="/">
        <BulletinBoard />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/admin/films/new">
        <NewFilm />
      </Route>
      <Route>
        <Error404 />
      </Route>
    </Switch>
  </Wrapper>
);

export default component;
