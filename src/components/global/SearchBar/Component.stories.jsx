import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Wrapper, GlobalStyle } from "../../../Router/styles";
import Component from "./Component";

export default {
  title: "Components/Global/SearchBar",
  component: Component,
  argTypes: { setFilmsSearchQuery: { action: "clicked" } },
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

Original.args = { query: "" };
