import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import Component from "./Component";

const mockStore = configureStore([]);

describe("Board component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      filmsBoard: {
        query: "",
      },
    });
  });
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Component
            loading={false}
            fetchFilmsInitialRequested={() => {}}
            films={[]}
            fetchFilmsNextRequested={() => {}}
            allCount={0}
            count={0}
            setFilmsSearchQuery={() => {}}
            query=""
          />
        </Provider>
      )

      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
