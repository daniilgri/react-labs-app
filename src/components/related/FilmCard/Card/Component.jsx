import React, { useEffect } from "react";
import PropTypes from "prop-types";

import FilmBox from "./FilmBox";
import TicketBox from "./TicketBox";
import { Wrapper, Pending } from "./styles";

const Component = ({
  filmId,
  fetchFilmByIdRequested,
  film,
  filmError,
  loading,
  user,
  makeOrderRequested,
  orderError,
  orderLoading,
  updateFilmRatingRequested,
}) => {
  const handleOrder = ({ chosenDate }) => {
    makeOrderRequested({
      filmId: film.id,
      screeningDate: chosenDate,
      userUid: user.uid,
    });
  };

  useEffect(() => {
    fetchFilmByIdRequested(filmId);
  }, []);

  if (loading || filmError || !film) {
    return <Pending>Loading</Pending>;
  }

  return (
    <Wrapper>
      <FilmBox film={film} user={user} onRatingChange={updateFilmRatingRequested} />
      <TicketBox
        screeningDates={film.screeningDates}
        user={user}
        onOrder={handleOrder}
        orderLoading={orderLoading}
        orderError={orderError}
      />
    </Wrapper>
  );
};

Component.defaultProps = {
  film: null,
  filmError: "",
  user: null,
  orderError: "",
};

Component.propTypes = {
  filmId: PropTypes.string.isRequired,
  fetchFilmByIdRequested: PropTypes.func.isRequired,
  film: PropTypes.objectOf(PropTypes.object),
  filmError: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  user: PropTypes.objectOf(PropTypes.object),
  makeOrderRequested: PropTypes.func.isRequired,
  orderError: PropTypes.string,
  orderLoading: PropTypes.bool.isRequired,
  updateFilmRatingRequested: PropTypes.func.isRequired,
};

export default Component;
