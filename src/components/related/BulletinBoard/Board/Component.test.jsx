import React from "react";
import renderer from "react-test-renderer";

import Component from "./Component";

describe("Board component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Component
          loading={false}
          fetchFilmsInitialRequested={() => {}}
          films={[]}
          fetchFilmsNextRequested={() => {}}
          allCount={0}
          count={0}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
