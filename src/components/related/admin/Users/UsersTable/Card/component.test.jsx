import React from "react";
import renderer from "react-test-renderer";

import component from "./component";

describe("UsersTable Card component", () => {
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
          onConfirmDeleteRequest={() => {}}
          onDelete={() => {}}
          currentUser={{
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
