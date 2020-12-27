import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Wrapper, GlobalStyle } from "../../../Router/styles";
import Component from "./Component";

export default {
  title: "Components/Global/Header",
  component: Component,
  argTypes: { signOutRequested: { action: "clicked" } },
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

Original.args = { loggedIn: false, loading: false, error: "" };

Original.parameters = {
  backgrounds: {
    values: [
      { name: "red", value: "#f00" },
      { name: "green", value: "#0f0" },
    ],
  },
};
