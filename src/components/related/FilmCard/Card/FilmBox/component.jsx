import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import { Wrapper, ImageWrapper, InfoList, Title, Description, Price, Tags, OneTag } from "./styles";

const component = ({ title, description, image, ticketPrice, tags, user, onRatingChange }) => (
  <Wrapper>
    <ImageWrapper src={image} />
    <InfoList>
      <Tags>
        {tags.map(el => (
          <OneTag key={uuidv4()}>{el}</OneTag>
        ))}
      </Tags>
      <Price>{ticketPrice} $</Price>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </InfoList>
  </Wrapper>
);

component.defaultProps = {
  tags: [],
  user: null,
};

component.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  ticketPrice: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  user: PropTypes.objectOf(PropTypes.object),
  onRatingChange: PropTypes.func.isRequired,
};

export default component;
