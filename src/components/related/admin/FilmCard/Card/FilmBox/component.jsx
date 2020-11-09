import React from "react";
import PropTypes from "prop-types";
import { Wrapper, ImageWrapper, InfoList, Title, Description } from "./styles";

const component = ({ title, description, imageSrc }) => (
  <Wrapper>
    <ImageWrapper src={imageSrc} />
    <InfoList>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </InfoList>
  </Wrapper>
);

component.defaultProps = {
  title: "",
  description: "",
  imageSrc: "",
};

component.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default component;
