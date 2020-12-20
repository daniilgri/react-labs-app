import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";

import Component from "./Component";

describe("FilmCard Card component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Router>
          <Component
            filmId="filmId"
            fetchFilmByIdRequested={() => {}}
            film={{
              title: "",
              description: "",
              tags: [],
              image: "",
              rates: [],
              screeningDates: [],
              ticketPrice: "",
            }}
            loading={false}
            makeOrderRequested={() => {}}
            orderLoading={false}
            updateFilmRatingRequested={() => {}}
            loggedIn={false}
          />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
