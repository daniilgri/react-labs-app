import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import convertFilmRating from "../../../../../../utils/convertFilmRating";

import {
  Wrapper,
  ImageWrapper,
  InfoList,
  Title,
  Description,
  Price,
  Tags,
  OneTag,
  RatingWrapper,
  RateNumber,
  RateNumberLabel,
} from "./styles";

const component = ({ film }) => {
  return (
    <Wrapper>
      <ImageWrapper src={film.image} />
      <InfoList>
        <Tags>
          {film.tags.map(el => (
            <OneTag key={uuidv4()}>{el}</OneTag>
          ))}
        </Tags>
        <RatingWrapper>
          <RateNumberLabel>
            Rate <RateNumber>{convertFilmRating(film.rates) || "-"}</RateNumber>
          </RateNumberLabel>
        </RatingWrapper>
        <Price>{film.ticketPrice} $</Price>
        <Title>{film.title}</Title>
        <Description>{film.description}</Description>
      </InfoList>
    </Wrapper>
  );
};

component.propTypes = {
  film: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default component;
