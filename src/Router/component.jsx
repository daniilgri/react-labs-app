import React from "react";
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "../components/global/PrivateRoute";
import PublicRoute from "../components/global/PublicRoute";

import Profile from "../pages/Profile";
import BulletinBoard from "../pages/BulletinBoard";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Error404 from "../pages/Error404";
import { default as NewFilmAdminPanel } from "../pages/admin/NewFilm";
import { default as FilmsAdminPanel } from "../pages/admin/Films";
import FilmCard from "../pages/FilmCard";
import Orders from "../pages/Orders";

import { Wrapper, GlobalStyle } from "./styles";

const component = () => (
  <Wrapper>
    <GlobalStyle />
    <Switch>
      <PrivateRoute exact path="/profile" component={Profile} />
      <PrivateRoute path="/profile/orders" component={Orders} />
      <PublicRoute
        restricted={false}
        exact
        path="/"
        component={BulletinBoard}
      />
      <PublicRoute restricted={false} path="/film/:id" component={FilmCard} />
      <PublicRoute restricted={true} path="/login" component={Login} />
      <PublicRoute restricted={true} path="/signup" component={Signup} />
      <PublicRoute
        exact
        restricted={false}
        path="/admin/films"
        component={FilmsAdminPanel}
      />
      <Route path="/admin/films/new" component={NewFilmAdminPanel} />
      <Route component={Error404} />
    </Switch>
  </Wrapper>
);

export default component;
