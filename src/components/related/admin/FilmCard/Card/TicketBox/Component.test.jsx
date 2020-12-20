import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";

import Component from "./Component";

describe("admin: FilmCard Card TicketBox component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Router>
          <Component
            screeningDates={[
              {
                date: "00:00:0000",
                times: ["00:00"],
              },
            ]}
          />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
