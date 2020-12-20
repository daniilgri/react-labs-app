import React from "react";
import renderer from "react-test-renderer";

import Component from "./Component";

describe("NewFilm Form DescriptionSection Tags component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Component onSet={() => {}} values={[]} errors={[]} onDelete={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
