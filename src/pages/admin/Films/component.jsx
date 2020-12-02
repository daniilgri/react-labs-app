import React from "react";

import AdminHeader from "../../../components/global/AdminHeader";
import FilmsTable from "../../../components/related/admin/Films/FilmsTable";
import { Wrapper } from "./styles";

const component = () => (
  <>
    <AdminHeader />
    <Wrapper>
      <FilmsTable />
    </Wrapper>
  </>
);

export default component;
