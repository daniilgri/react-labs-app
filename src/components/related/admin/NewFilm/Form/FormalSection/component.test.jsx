import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";

import component from "./component";

describe("NewFilm Form FormalSection component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Router>
          <component
            onChange={() => {}}
            values={[]}
            errors={[]}
            onAddScreeningDateModalOpen={() => {}}
            onScreeningDateAdd={() => {}}
            onScreeningDateDelete={() => {}}
          />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
