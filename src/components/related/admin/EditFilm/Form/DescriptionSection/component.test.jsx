import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";

import component from "./component";

describe("EditFilm Form DescriptionSection component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Router>
          <component
            onChange={() => {}}
            title="title"
            description="description"
            tags={[]}
            errors={[]}
            onTagAdd={() => {}}
            onTagDelete={() => {}}
          />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
