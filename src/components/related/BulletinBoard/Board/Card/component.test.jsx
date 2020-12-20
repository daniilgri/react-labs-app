import React from "react";
import renderer from "react-test-renderer";

import component from "./component";

describe("Board Card component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<component id="testId" image="/test" title="Test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
