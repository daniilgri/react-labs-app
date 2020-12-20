import React from "react";
import renderer from "react-test-renderer";

import Component from "./Component";

describe("EditFilm AddScreeningDateModal component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Component closeModal={() => {}} isOpen onScreeningDateAdd={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
