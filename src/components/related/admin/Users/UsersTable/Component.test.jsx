import React from "react";
import renderer from "react-test-renderer";

import Component from "./Component";

describe("UsersTable component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Component
          loading={false}
          fetchUsersAdminPanelInitialRequested={() => {}}
          deleteUserRequested={() => {}}
          fetchUsersAdminPanelNextRequested={() => {}}
          loadingCurrentUser={false}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
