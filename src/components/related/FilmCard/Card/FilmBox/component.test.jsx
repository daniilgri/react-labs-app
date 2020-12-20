import React from "react";
import renderer from "react-test-renderer";

import component from "./component";

describe("FilmCard Card FilmBox component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <component
          onRatingChange={() => {}}
          film={{
            title: "",
            description: "",
            tags: [],
            image: "",
            rates: [],
            screeningDates: [],
            ticketPrice: "",
          }}
          loading={false}
          loggedIn={false}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
