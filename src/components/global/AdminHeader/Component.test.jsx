import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";

import Component from "./Component";

describe("AdminHeader component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Router>
          <Component />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
