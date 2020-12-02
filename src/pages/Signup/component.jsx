import React from "react";

import Header from "../../components/global/Header";
import SignupForm from "../../components/related/Signup/SignupForm";
import { Wrapper } from "./styles";

const component = () => (
  <>
    <Header />
    <Wrapper>
      <SignupForm />
    </Wrapper>
  </>
);

export default component;
