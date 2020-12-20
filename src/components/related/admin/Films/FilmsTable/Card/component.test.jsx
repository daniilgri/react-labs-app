import React from "react";
import renderer from "react-test-renderer";

import component from "./component";

describe("FilmsTable Card component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <component
          onDelete={() => {}}
          film={{
            title: "",
            description: "",
            tags: [],
            image: "",
            rates: [],
            screeningDates: [],
            ticketPrice: "",
          }}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
