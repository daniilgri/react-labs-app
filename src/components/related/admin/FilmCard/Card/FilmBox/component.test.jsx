import React from "react";
import renderer from "react-test-renderer";

import component from "./component";

describe("admin: FilmCard Card FilmBox component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <component
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
