import React from "react";
import renderer from "react-test-renderer";

import component from "./component";

describe("AdminPanelSection component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <component
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
