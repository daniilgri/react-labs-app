import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";

import Component from "./Component";

describe("Header component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Router>
          <Component loading={false} signOutRequested={() => {}} loggedIn={false} />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
