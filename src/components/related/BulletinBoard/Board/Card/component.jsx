import React from "react";
import PropTypes from "prop-types";
import { Wrapper, BottomInfo, Title } from "./styles";

const component = ({ id, image, title }) => {
  return (
    <Wrapper to={`film/${id}`} src={image}>
      <BottomInfo>
        <Title>{title}</Title>
      </BottomInfo>
    </Wrapper>
  );
};

component.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default component;
