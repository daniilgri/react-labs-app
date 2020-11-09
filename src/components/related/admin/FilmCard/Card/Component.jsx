import React, { useEffect } from "react";
import PropTypes from "prop-types";

import FilmBox from "./FilmBox";
import TicketBox from "./TicketBox";
import { Wrapper, Pending } from "./styles";

const Component = ({
  filmId,
  fetchFilmByIdRequested,
  film,
  error,
  loading,
}) => {
  useEffect(() => {
    fetchFilmByIdRequested(filmId);
  }, []);

  if (loading) {
    return <Pending>Loading</Pending>;
  }

  return (
    <Wrapper>
      <FilmBox
        title={film.title}
        description={film.description}
        imageSrc="https://picsum.photos/900/1400"
      />
      <TicketBox />
    </Wrapper>
  );
};

Component.defaultProps = {
  filmId: "",
  fetchFilmByIdRequested: () => {},
  film: {},
  error: "",
  loading: false,
};

Component.propTypes = {
  filmId: PropTypes.string.isRequired,
  fetchFilmByIdRequested: PropTypes.func.isRequired,
  film: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default Component;
