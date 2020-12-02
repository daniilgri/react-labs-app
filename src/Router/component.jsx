import React from "react";
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "../components/global/PrivateRoute";
import PublicRoute from "../components/global/PublicRoute";
import AdminRoute from "../components/global/AdminRoute";

import Profile from "../pages/Profile";
import BulletinBoard from "../pages/BulletinBoard";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Error404 from "../pages/Error404";
import FilmCard from "../pages/FilmCard";
import Orders from "../pages/Orders";

import UsersAdminPanel from "../pages/admin/Users";
import NewFilmAdminPanel from "../pages/admin/NewFilm";
import FilmsAdminPanel from "../pages/admin/Films";
import FilmCardAdminPanel from "../pages/admin/FilmCard";
import EditFilmAdminPanel from "../pages/admin/EditFilm";

import { Wrapper, GlobalStyle } from "./styles";

const component = () => (
  <Wrapper>
    <GlobalStyle />
    <Switch>
      <PrivateRoute exact path="/profile" component={Profile} />
      <PrivateRoute path="/profile/orders" component={Orders} />

      <Route restricted={false} exact path="/" component={BulletinBoard} />
      <PublicRoute restricted={false} path="/film/:id" component={FilmCard} />
      <PublicRoute restricted path="/login" component={Login} />
      <PublicRoute restricted path="/signup" component={Signup} />

      <AdminRoute exact path="/admin/films" component={FilmsAdminPanel} />
      <AdminRoute path="/admin/films/new" component={NewFilmAdminPanel} />
      <AdminRoute path="/admin/users" component={UsersAdminPanel} />
      <AdminRoute exact path="/admin/film/:id" component={FilmCardAdminPanel} />
      <AdminRoute path="/admin/film/edit/:id" component={EditFilmAdminPanel} />

      <Route component={Error404} />
    </Switch>
  </Wrapper>
);

export default component;
