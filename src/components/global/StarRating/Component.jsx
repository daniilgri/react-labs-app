import React, { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import RatingIcon from "../RatingIcon";
import { Wrapper } from "./styles";

const Component = ({ count, rate, onRateSet }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const onMouseEnter = index => {
    setHoverRating(index);
  };

  const onMouseLeave = () => {
    setHoverRating(0);
  };

  const onSaveRating = index => {
    onRateSet(index);
  };

  return (
    <Wrapper>
      {Array.from(Array(count).keys()).map(index => {
        return (
          <RatingIcon
            key={uuidv4()}
            index={index + 1}
            rating={rate}
            hoverRating={hoverRating}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onSaveRating={onSaveRating}
          />
        );
      })}
    </Wrapper>
  );
};

Component.propTypes = {
  count: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  onRateSet: PropTypes.func.isRequired,
};

export default Component;
