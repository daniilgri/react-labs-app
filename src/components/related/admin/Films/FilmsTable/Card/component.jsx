import React from "react";
import PropTypes from "prop-types";

import {
  Wrapper,
  ImageWrapper,
  Image,
  InfoSection,
  Title,
  Controllers,
  Button,
  LinkButton,
} from "./styles";

const component = ({ film, onDelete }) => {
  const handleDeleteButtonOnClick = event => {
    event.preventDefault();
    onDelete({ filmId: film.id });
  };

  return (
    <Wrapper>
      <ImageWrapper to={`/admin/film/${film.id}`}>
        <Image src={film.image} />
      </ImageWrapper>
      <InfoSection>
        <Title>{film.title}</Title>
        <Controllers>
          <LinkButton color="#000" to={`/admin/film/edit/${film.id}`}>
            Edit
          </LinkButton>
          <Button color="#ff6868" onClick={handleDeleteButtonOnClick}>
            Delete
          </Button>
        </Controllers>
      </InfoSection>
    </Wrapper>
  );
};

component.propTypes = {
  film: PropTypes.objectOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default component;
