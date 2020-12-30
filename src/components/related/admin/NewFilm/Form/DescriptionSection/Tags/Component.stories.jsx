import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router } from "react-router-dom";

import { Wrapper, GlobalStyle } from "../../../../../../../Router/styles";
import Component from "./Component";

export default {
  title: "Components/Related/admin/NewFilm/Form/DescriptionSection/Tags",
  component: Component,
  argTypes: {
    onSet: {
      action: "set",
    },
    onDelete: {
      action: "delete",
    },
  },
};

const Template = args => (
  <>
    <CssBaseline />
    <Wrapper>
      <Router>
        <GlobalStyle />
        <Component {...args} />
      </Router>
    </Wrapper>
  </>
);

export const Original = Template.bind({});

Original.args = {
  values: ["tag1", "tag2"],
  errors: "",
};
