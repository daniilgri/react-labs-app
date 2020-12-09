import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import StarRating from "../../../../global/StarRating";
import convertFilmRating from "../../../../../utils/convertFilmRating";
import getRateByUser from "../../../../../utils/getRateByUser";

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

const component = ({ film, onRatingChange, user, loggedIn }) => {
  const handleRatingChange = rate => onRatingChange({ rate, filmId: film.id, userUid: user.uid });

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

          {loggedIn && (
            <StarRating
              count={5}
              rate={getRateByUser({ rates: film.rates, userUid: user.uid })}
              onRateSet={handleRatingChange}
            />
          )}
        </RatingWrapper>
        <Price>{film.ticketPrice} $</Price>
        <Title>{film.title}</Title>
        <Description>{film.description}</Description>
      </InfoList>
    </Wrapper>
  );
};

component.defaultProps = {
  user: {
    uid: "",
    firstName: "",
    lastName: "",
    email: "",
    role: "guest",
    requestOnDelete: false,
  },
};

component.propTypes = {
  onRatingChange: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  user: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string])
  ),
  film: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string, PropTypes.array])
  ).isRequired,
};

export default component;
