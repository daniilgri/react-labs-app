import React from "react";

import Header from "../../components/global/Header";
import LoginForm from "../../components/related/Login/LoginForm";
import { Wrapper } from "./styles";

const component = () => (
  <React.Fragment>
    <Header />
    <Wrapper>
      <LoginForm />
    </Wrapper>
  </React.Fragment>
);

export default component;
