import React from "react";
import renderer from "react-test-renderer";

import Component from "./Component";

describe("StarRating component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Component count={5} rate={2} onRateSet={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
