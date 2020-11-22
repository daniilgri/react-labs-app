import React from "react";
import PropTypes from "prop-types";

import {
  Wrapper,
  Image,
  InfoSection,
  Title,
  Controllers,
  Button,
} from "./styles";

const component = ({ film, onDelete }) => {
  const handleDeleteButtonOnClick = (event) => {
    event.preventDefault();
    onDelete({ filmId: film.id });
  };

  return (
    <Wrapper to={`/admin/film/${film.id}`}>
      <Image src={film.image} />
      <InfoSection>
        <Title>{film.title}</Title>
        <Controllers>
          <Button color="#000">Edit</Button>
          <Button color="#ff6868" onClick={handleDeleteButtonOnClick}>
            Delete
          </Button>
        </Controllers>
      </InfoSection>
    </Wrapper>
  );
};

component.defaultProps = {
  film: {},
  onDelete: () => {},
};

component.propTypes = {
  film: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default component;
