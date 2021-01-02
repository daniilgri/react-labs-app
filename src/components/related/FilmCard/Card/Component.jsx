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
  loggedIn,
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
      <FilmBox
        film={film}
        user={user}
        onRatingChange={updateFilmRatingRequested}
        loggedIn={loggedIn}
      />
      <TicketBox
        screeningDates={film.screeningDates}
        loggedIn={loggedIn}
        onOrder={handleOrder}
        orderLoading={orderLoading}
        orderError={orderError}
      />
    </Wrapper>
  );
};

Component.defaultProps = {
  filmError: "",
  orderError: "",
  user: {
    uid: "",
    firstName: "",
    lastName: "",
    email: "",
    role: "guest",
    requestOnDelete: false,
  },
  filmId: "",
  film: {
    title: "None",
    description: "None",
    tags: [],
    image: "",
    rates: [],
    screeningDates: [],
    ticketPrice: "0",
  },
};

Component.propTypes = {
  filmId: PropTypes.string,
  fetchFilmByIdRequested: PropTypes.func.isRequired,
  filmError: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  makeOrderRequested: PropTypes.func.isRequired,
  orderError: PropTypes.string,
  orderLoading: PropTypes.bool.isRequired,
  updateFilmRatingRequested: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  user: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string])
  ),
  film: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string, PropTypes.array])
  ),
};

export default Component;
