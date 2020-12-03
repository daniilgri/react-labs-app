import React, { useMemo } from "react";
import PropTypes from "prop-types";
import StarIcon from "../StarIcon";
import { Wrapper } from "./styles";

const Component = ({ index, rating, hoverRating, onMouseEnter, onMouseLeave, onSaveRating }) => {
  const fill = useMemo(() => {
    if (hoverRating >= index) {
      return "yellow";
    }
    if (!hoverRating && rating >= index) {
      return "yellow";
    }
    return "none";
  }, [rating, hoverRating, index]);

  const handleMouseEnter = () => {
    onMouseEnter(index);
  };

  const handleMouseLeave = () => {
    onMouseLeave();
  };

  const handleIconOnClick = () => {
    onSaveRating(index);
  };

  return (
    <Wrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleIconOnClick}
    >
      <StarIcon fill={fill} />
    </Wrapper>
  );
};

Component.propTypes = {
  index: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  hoverRating: PropTypes.number.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onSaveRating: PropTypes.func.isRequired,
};

export default Component;
