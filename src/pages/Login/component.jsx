import React from "react";

import Header from "../../components/global/Header";
import LoginForm from "../../components/related/Login/LoginForm";
import { Wrapper } from "./styles";

const component = () => (
  <>
    <Header />
    <Wrapper>
      <LoginForm />
    </Wrapper>
  </>
);

export default component;
