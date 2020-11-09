import React from "react";

import AdminHeader from "../../../components/global/AdminHeader";
import Form from "../../../components/related/admin/NewFilm/Form";
import { Wrapper } from "./styles";

const component = () => (
  <React.Fragment>
    <AdminHeader />
    <Wrapper>
      <Form />
    </Wrapper>
  </React.Fragment>
);

export default component;
