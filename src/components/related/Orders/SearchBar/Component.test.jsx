import React from "react";
import renderer from "react-test-renderer";

import Component from "./Component";

describe("SearchBar component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Component />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
