import "firebase/storage";

import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import store from "../../../../../store";
import Component from "./Component";

describe("NewFilm Form component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Component
              addFilmRequested={() => {}}
              filmId="testId"
              history={{}}
              openAddScreeningDateModal={() => {}}
            />
          </Router>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
