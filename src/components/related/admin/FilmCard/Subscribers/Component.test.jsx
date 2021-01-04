import React from "react";
import renderer from "react-test-renderer";

import Component from "./Component";

describe("Subscribers component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Component
          loading={false}
          fetchSubscribersInitialRequested={() => {}}
          fetchSubscribersNextRequested={() => {}}
          filmId="filmId"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
