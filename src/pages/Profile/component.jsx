import React from "react";

import PersonalForm from "../../components/related/Profile/PersonalForm";
import PasswordChangeForm from "../../components/related/Profile/PasswordChangeForm";
import RequestOnDeleteSection from "../../components/related/Profile/RequestOnDeleteSection";
import Header from "../../components/global/Header";
import { Wrapper } from "./styles";

const component = () => (
  <React.Fragment>
    <Header />
    <Wrapper>
      <PersonalForm />
      <PasswordChangeForm />
      <RequestOnDeleteSection />
    </Wrapper>
  </React.Fragment>
);

export default component;
