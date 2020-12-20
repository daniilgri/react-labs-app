import React from "react";
import renderer from "react-test-renderer";

import Component from "./Component";

describe("OrderTable component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Component
          loading={false}
          fetchOrdersInitialRequested={() => {}}
          cancelOrderRequested={() => {}}
          fetchOrdersNextRequested={() => {}}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
