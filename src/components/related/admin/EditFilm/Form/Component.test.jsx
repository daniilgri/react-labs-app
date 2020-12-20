import "firebase/storage";

import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import store from "../../../../../store";
import Component from "./Component";

describe("EditFilm Form component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Component
              openAddScreeningDateModal={() => {}}
              filmId="testId"
              film={{
                title: "",
                description: "",
                tags: [],
                image: "",
                rates: [],
                screeningDates: [],
                ticketPrice: "",
              }}
              editFilmRequested={() => {}}
              fetchEditFilmRequested={() => {}}
              loading={false}
            />
          </Router>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
