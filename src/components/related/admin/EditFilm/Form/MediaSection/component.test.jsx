import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";

import component from "./component";

describe("EditFilm Form MediaSection component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Router>
          <component onImageUpload={() => {}} errors={[]} previewImage="testSrc" />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
