import React from "react";
import { useParams } from "react-router-dom";

import AdminHeader from "../../../components/global/AdminHeader";
import { Wrapper } from "./styles";

const Component = () => {
  const { id } = useParams();

  return (
    <React.Fragment>
      <AdminHeader />
      <Wrapper></Wrapper>
    </React.Fragment>
  );
};

export default Component;
