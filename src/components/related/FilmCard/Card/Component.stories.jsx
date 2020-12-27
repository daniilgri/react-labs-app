import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router } from "react-router-dom";

import { Wrapper, GlobalStyle } from "../../../../Router/styles";
import Component from "./Component";

export default {
  title: "Components/Related/FilmCard/Card",
  component: Component,
  argTypes: {
    fetchFilmByIdRequested: { action: "fetch film by id" },
    makeOrderRequested: { action: "make order" },
    updateFilmRatingRequested: { action: "update film rating" },
  },
};

const Template = args => (
  <>
    <CssBaseline />
    <Wrapper>
      <Router>
        <GlobalStyle />
        <Component {...args} />
      </Router>
    </Wrapper>
  </>
);

export const Original = Template.bind({});

Original.args = {
  filmId: "some id",
  film: {
    title: "Some title",
    description: "Some description",
    tags: ["tag1", "tag2"],
    image: "https://picsum.photos/200/300",
    rates: [
      { rate: 4, userUid: "id" },
      { rate: 1, userUid: "id1" },
    ],
    screeningDates: [{ date: "05.11.2021", times: ["19:00", "20:00"] }],
    ticketPrice: "5",
  },
  filmError: "",
  loading: false,
  user: {
    uid: "user id",
    firstName: "First name",
    lastName: "Last name",
    email: "email@mail.ru",
    role: "guest",
    requestOnDelete: false,
  },
  orderError: "",
  orderLoading: false,
  loggedIn: true,
};
