import React from "react";
import PropTypes from "prop-types";
import { Wrapper, BottomInfo, Title } from "./styles";

const component = ({ film }) => (
  <Wrapper to={`film/${film.id}`} src={film.image}>
    <BottomInfo>
      <Title>{film.title}</Title>
    </BottomInfo>
  </Wrapper>
);

component.propTypes = {
  film: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default component;
