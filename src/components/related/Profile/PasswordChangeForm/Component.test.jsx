import React from "react";
import renderer from "react-test-renderer";

import Component from "./Component";

describe("PasswordChangeForm component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Component changePasswordRequested={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
