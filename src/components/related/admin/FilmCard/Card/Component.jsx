import React, { useEffect } from "react";
import PropTypes from "prop-types";

import FilmBox from "./FilmBox";
import TicketBox from "./TicketBox";
import { Wrapper, Pending } from "./styles";

const Component = ({
  filmId,
  fetchFilmByIdAdminPanelRequested,
  film,
  filmError,
  loading,
}) => {
  useEffect(() => {
    fetchFilmByIdAdminPanelRequested(filmId);
  }, []);

  if (loading || filmError) {
    return <Pending>Loading</Pending>;
  }

  return (
    <Wrapper>
      <FilmBox
        title={film.title}
        description={film.description}
        image={film.image}
        ticketPrice={film.ticketPrice}
        tags={film.tags}
      />
      <TicketBox screeningDates={film.screeningDates} />
    </Wrapper>
  );
};

Component.defaultProps = {
  fetchFilmByIdAdminPanelRequested: () => {},
  filmId: "",
  film: {},
  filmError: "",
  loading: false,
};

Component.propTypes = {
  filmId: PropTypes.string.isRequired,
  fetchFilmByIdAdminPanelRequested: PropTypes.func.isRequired,
  film: PropTypes.object,
  filmError: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default Component;
