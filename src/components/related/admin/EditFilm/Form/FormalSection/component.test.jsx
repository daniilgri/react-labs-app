import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";

import component from "./component";

describe("EditFilm Form FormalSection component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Router>
          <component
            onChange={() => {}}
            errors={[]}
            onAddScreeningDateModalOpen={() => {}}
            onScreeningDateAdd={() => {}}
            onScreeningDateDelete={() => {}}
            screeningDates={[]}
            ticketPrice={0}
          />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
