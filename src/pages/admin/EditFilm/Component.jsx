import React from "react";
import { useParams } from "react-router-dom";

import AdminHeader from "../../../components/global/AdminHeader";
import Form from "../../../components/related/admin/EditFilm/Form";
import { Wrapper } from "./styles";

const Component = () => {
  const { id } = useParams();

  return (
    <React.Fragment>
      <AdminHeader />
      <Wrapper>
        <Form filmId={id} />
      </Wrapper>
    </React.Fragment>
  );
};

export default Component;
