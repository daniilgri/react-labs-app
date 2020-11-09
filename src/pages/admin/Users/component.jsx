import React from "react";
import AdminHeader from "../../../components/global/AdminHeader";
import UsersTable from "../../../components/related/admin/Users/UsersTable";
import { Wrapper } from "./styles";

const component = () => (
  <React.Fragment>
    <AdminHeader />
    <Wrapper>
      <UsersTable />
    </Wrapper>
  </React.Fragment>
);

export default component;
