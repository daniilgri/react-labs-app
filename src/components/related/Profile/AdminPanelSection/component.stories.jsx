import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Wrapper as ProfileWrapper } from "../../../../pages/Profile/styles";
import { Wrapper, GlobalStyle } from "../../../../Router/styles";
import component from "./component";

export default {
  title: "Components/Related/Profile/AdminPanelSection",
  component,
  argTypes: {},
};

const Template = args => (
  <>
    <CssBaseline />
    <Wrapper>
      <Router>
        <GlobalStyle />
        <ProfileWrapper>
          <component {...args} />
        </ProfileWrapper>
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
    email: "",
    role: "admin",
    requestOnDelete: false,
  },
  loading: false,
  error: "",
};
