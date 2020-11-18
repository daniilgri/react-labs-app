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

  const handleRatingChange = (rating) => {
    updateFilmRatingRequested({ rating, filmId: film.id, userUid: user.uid });
  };

  useEffect(() => {
    fetchFilmByIdRequested(filmId);
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
        user={user}
        rating={film.rate}
        onRatingChange={handleRatingChange}
      />
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
  fetchFilmByIdRequested: () => {},
  makeOrderRequested: () => {},
  filmId: "",
  film: {},
  filmError: "",
  loading: false,
  user: null,
  orderError: "",
  orderLoading: false,
  updateFilmRatingRequested: () => {},
};

Component.propTypes = {
  filmId: PropTypes.string.isRequired,
  fetchFilmByIdRequested: PropTypes.func.isRequired,
  film: PropTypes.object,
  filmError: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object,
  makeOrderRequested: PropTypes.func.isRequired,
  orderError: PropTypes.string,
  orderLoading: PropTypes.bool.isRequired,
  updateFilmRatingRequested: PropTypes.func.isRequired,
};

export default Component;
