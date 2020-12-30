import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import Component from "./Component";

const mockStore = configureStore([]);

describe("admin FilmCard component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      auth: {
        user: {},
      },
      filmCardAdminPanel: {
        loading: false,
        error: "",
      },
      filmSubscribers: {
        count: 1,
        error: "",
        loading: false,
        users: [{}],
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
