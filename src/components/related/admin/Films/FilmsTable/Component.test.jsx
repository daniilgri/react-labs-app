import React from "react";
import renderer from "react-test-renderer";

import Component from "./Component";

describe("FilmsTable component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Component
          loading={false}
          fetchFilmsAdminPanelInitialRequested={() => {}}
          films={[]}
          fetchFilmsAdminPanelNextRequested={() => {}}
          allCount={0}
          count={0}
          deleteFilmRequested={() => {}}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
