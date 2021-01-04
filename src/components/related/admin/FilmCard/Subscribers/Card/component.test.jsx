import React from "react";
import renderer from "react-test-renderer";

import component from "./component";

describe("admin: Subscriber Card component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <component
          user={{
            uid: "",
            firstName: "",
            lastName: "",
            email: "",
            role: "guest",
            requestOnDelete: false,
          }}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
