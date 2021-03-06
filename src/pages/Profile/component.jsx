import React from "react";

import PersonalForm from "../../components/related/Profile/PersonalForm";
import PasswordChangeForm from "../../components/related/Profile/PasswordChangeForm";
import RequestOnDeleteSection from "../../components/related/Profile/RequestOnDeleteSection";
import AdminPanelSection from "../../components/related/Profile/AdminPanelSection";
import EmailChangeForm from "../../components/related/Profile/EmailChangeForm";
import Header from "../../components/global/Header";
import { Wrapper } from "./styles";

const component = () => (
  <>
    <Header />
    <Wrapper>
      <AdminPanelSection />
      <PersonalForm />
      <EmailChangeForm />
      <PasswordChangeForm />
      <RequestOnDeleteSection />
    </Wrapper>
  </>
);

export default component;
