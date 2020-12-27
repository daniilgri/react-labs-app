import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router } from "react-router-dom";

import { Wrapper, GlobalStyle } from "../../../../Router/styles";
import Component from "./Component";

export default {
  title: "Components/Related/Login/LoginForm",
  component: Component,
  argTypes: {
    signInRequested: {
      action: "sign in button clicked",
    },
    cleanAuthErrorState: {
      action: "auth error state is cleaned",
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
  error: "",
};
