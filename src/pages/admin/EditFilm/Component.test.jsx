import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import Component from "./Component";

const mockStore = configureStore([]);

describe("EditFilm component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      editFilm: {
        loading: false,
        error: "",
        film: {
          title: "",
          description: "",
          tags: [],
          image: "",
          rates: [],
          screeningDates: [],
          ticketPrice: "",
        },
      },
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
            <Component />
          </Router>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
