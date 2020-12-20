import React from "react";
import renderer from "react-test-renderer";

import Component from "./Component";

describe("EmailChangeForm component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Component changeEmailRequested={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
