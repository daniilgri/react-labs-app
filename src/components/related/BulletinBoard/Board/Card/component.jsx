import React from "react";
import PropTypes from "prop-types";
import { Wrapper, BottomInfo, Title } from "./styles";

const component = ({ film }) => (
  <Wrapper to={`film/${film.id}`} src="https://picsum.photos/800/1200">
    <BottomInfo>
      <Title>{film.title}</Title>
    </BottomInfo>
  </Wrapper>
);

component.defaultProps = {
  film: {},
};

component.propTypes = {
  film: PropTypes.object.isRequired,
};

export default component;
