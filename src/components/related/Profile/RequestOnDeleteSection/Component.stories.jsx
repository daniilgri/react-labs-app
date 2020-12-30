import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router } from "react-router-dom";

import { Wrapper, GlobalStyle } from "../../../../Router/styles";
import Component from "./Component";

export default {
  title: "Components/Related/Profile/RequestOnDeleteSection",
  component: Component,
  argTypes: {
    requestOnDeleteRequested: {
      action: "send request on delete",
    },
    cancelRequestOnDeleteRequested: {
      action: "cancel request on delete",
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
  user: {
    uid: "",
    firstName: "",
    lastName: "",
    email: "test@gmail.com",
    role: "admin",
    requestOnDelete: false,
  },
  loading: false,
  error: "",
};
