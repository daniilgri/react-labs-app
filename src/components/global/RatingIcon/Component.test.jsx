import React from "react";
import renderer from "react-test-renderer";

import Component from "./Component";

describe("RatingIcon component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Component
          index={2}
          rating={2}
          hoverRating={3}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
          onSaveRating={() => {}}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
