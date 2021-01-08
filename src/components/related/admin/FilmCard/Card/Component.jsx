import React, { useEffect } from "react";
import PropTypes from "prop-types";

import FilmBox from "./FilmBox";
import TicketBox from "./TicketBox";
import { Wrapper, Pending } from "./styles";

const Component = ({ filmId, fetchFilmByIdAdminPanelRequested, film, filmError, loading }) => {
  useEffect(() => {
    fetchFilmByIdAdminPanelRequested(filmId);
  }, [fetchFilmByIdAdminPanelRequested, filmId]);

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
  filmId: "",
  film: {
    title: "",
    description: "",
    tags: [],
    image: "",
    rates: [],
    screeningDates: [],
    ticketPrice: "",
  },
};

Component.propTypes = {
  filmId: PropTypes.string,
  fetchFilmByIdAdminPanelRequested: PropTypes.func.isRequired,
  film: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string, PropTypes.array])
  ),
  filmError: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default Component;
