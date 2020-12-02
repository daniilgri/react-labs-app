import React from "react";
import { useParams } from "react-router-dom";

import Header from "../../components/global/Header";
import Card from "../../components/related/FilmCard/Card";
import { Wrapper } from "./styles";

const Component = () => {
  const { id } = useParams();

  return (
    <>
      <Header />
      <Wrapper>
        <Card filmId={id} />
      </Wrapper>
    </>
  );
};

export default Component;
