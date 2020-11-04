import React from "react";
import Board from "../../components/related/BulletinBoard/Board";
import Header from "../../components/global/Header";
import { Wrapper } from "./styles";

const component = () => (
  <React.Fragment>
    <Header />
    <Wrapper>
      <Board />
    </Wrapper>
  </React.Fragment>
);

export default component;
