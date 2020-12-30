import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router } from "react-router-dom";

import { Wrapper as ProfileWrapper } from "../../../../pages/Profile/styles";
import { Wrapper, GlobalStyle } from "../../../../Router/styles";
import Component from "./Component";

export default {
  title: "Components/Related/Profile/PasswordChangeForm",
  component: Component,
  argTypes: {
    changePasswordRequested: {
      action: "change password",
    },
  },
};

const Template = args => (
  <>
    <CssBaseline />
    <Wrapper>
      <Router>
        <GlobalStyle />
        <ProfileWrapper>
          <Component {...args} />
        </ProfileWrapper>
      </Router>
    </Wrapper>
  </>
);

export const Original = Template.bind({});
