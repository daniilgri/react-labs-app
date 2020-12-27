import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Wrapper, GlobalStyle } from "../../../Router/styles";
import Component from "./Component";

export default {
  title: "Components/Global/StarRating",
  component: Component,
  argTypes: {
    onRateSet: { action: "rate set" },
  },
};

const Template = args => (
  <>
    <CssBaseline />
    <Wrapper>
      <GlobalStyle />
      <Component {...args} />
    </Wrapper>
  </>
);

export const Original = Template.bind({});

Original.args = {
  count: 5,
  rate: 3,
};
