import "firebase/storage";

import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import Component from "./Component";

const mockStore = configureStore([]);

describe("EditFilm Form component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      addScreeningDateModal: {
        open: false,
      },
    });
  });

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
