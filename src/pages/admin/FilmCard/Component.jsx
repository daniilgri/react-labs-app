import React from "react";
import { useParams } from "react-router-dom";

import AdminHeader from "../../../components/global/AdminHeader";
import Card from "../../../components/related/admin/FilmCard/Card";
import Subscribers from "../../../components/related/admin/FilmCard/Subscribers";
import { Wrapper } from "./styles";

const Component = () => {
  const { id } = useParams();

  return (
    <>
      <AdminHeader />
      <Wrapper>
        <Card filmId={id} />
        <Subscribers filmId={id} />
      </Wrapper>
    </>
  );
};

export default Component;
