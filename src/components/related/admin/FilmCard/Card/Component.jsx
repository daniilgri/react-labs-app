import React, { useEffect } from "react";
import PropTypes from "prop-types";

import FilmBox from "./FilmBox";
import TicketBox from "./TicketBox";
import { Wrapper, Pending } from "./styles";

const Component = ({ filmId, fetchFilmByIdAdminPanelRequested, film, filmError, loading }) => {
  useEffect(() => {
    fetchFilmByIdAdminPanelRequested(filmId);
  }, []);

  if (loading || filmError || !film) {
    return <Pending>Loading</Pending>;
  }

  return (
    <Wrapper>
      <FilmBox film={film} />
      <TicketBox screeningDates={film.screeningDates} />
    </Wrapper>
  );
};

Component.defaultProps = {
  filmError: "",
};

Component.propTypes = {
  filmId: PropTypes.string.isRequired,
  fetchFilmByIdAdminPanelRequested: PropTypes.func.isRequired,
  film: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string, PropTypes.array])
  ).isRequired,
  filmError: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default Component;
