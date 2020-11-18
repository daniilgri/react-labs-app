import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import StarRatings from "react-star-ratings";

import {
  Wrapper,
  ImageWrapper,
  InfoList,
  Title,
  Description,
  Price,
  Tags,
  OneTag,
} from "./styles";

const component = ({
  title,
  description,
  image,
  ticketPrice,
  tags,
  user,
  rating,
  onRatingChange,
}) => (
  <Wrapper>
    <ImageWrapper src={image} />
    <InfoList>
      <Tags>
        {tags.map((el) => (
          <OneTag key={uuidv4()}>{el}</OneTag>
        ))}
      </Tags>
      {user ? (
        <StarRatings
          rating={rating}
          starRatedColor="blue"
          changeRating={onRatingChange}
          numberOfStars={5}
          name="rating"
        />
      ) : (
        <StarRatings
          rating={rating}
          starRatedColor="blue"
          numberOfStars={5}
          name="rating"
        />
      )}
      <Price>{ticketPrice} $</Price>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </InfoList>
  </Wrapper>
);

component.defaultProps = {
  title: "",
  description: "",
  image: "",
  ticketPrice: "0",
  tags: [],
  user: null,
  rating: null,
  onRatingChange: () => {},
};

component.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  ticketPrice: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  user: PropTypes.object,
  rating: PropTypes.object,
  onRatingChange: PropTypes.func.isRequired,
};

export default component;
