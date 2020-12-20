import React from "react";
import renderer from "react-test-renderer";

import component from "./component";

describe("OrdersTable Card component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <component
          value={{
            film: { image: "testSrc", title: "title" },
            screeningDate: { date: "00:00:0000", time: "00:00" },
          }}
          onCancel={() => {}}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
