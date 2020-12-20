import React from "react";
import renderer from "react-test-renderer";

import Component from "./Component";

describe("RequestOnDeleteSection component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Component
          requestOnDeleteRequested={() => {}}
          cancelRequestOnDeleteRequested={() => {}}
          user={{
            firstName: "firstName",
            lastName: "lastName",
            uid: "e12",
            email: "fkfk@gmail.com",
            role: "guest",
            requestOnDelete: false,
          }}
          loading={false}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
