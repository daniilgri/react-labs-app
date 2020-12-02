import React from "react";

import AdminHeader from "../../../components/global/AdminHeader";
import Form from "../../../components/related/admin/NewFilm/Form";
import { Wrapper } from "./styles";

const component = () => (
  <>
    <AdminHeader />
    <Wrapper>
      <Form />
    </Wrapper>
  </>
);

export default component;
