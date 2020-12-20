import React from "react";
import renderer from "react-test-renderer";

import Component from "./Component";

describe("admin: FilmCard Card component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Component
          filmId="filmId"
          fetchFilmByIdAdminPanelRequested={() => {}}
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
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
