import { combineReducers } from "redux";

import addFilm from "./addFilm";
import filmsBoard from "./filmsBoard";
import auth from "./auth";
import filmCard from "./filmCard";
import addScreeningDateModal from "./addScreeningDateModal";
import filmsAdminPanel from "./filmsAdminPanel";
import usersAdminPanel from "./usersAdminPanel";
import newOrder from "./newOrder";
import orders from "./orders";
import filmSubscribers from "./filmSubscribers";
import filmCardAdminPanel from "./filmCardAdminPanel";
import editFilm from "./editFilm";

export default combineReducers({
  addFilm,
  filmsBoard,
  auth,
  filmCard,
  addScreeningDateModal,
  filmsAdminPanel,
  usersAdminPanel,
  newOrder,
  orders,
  filmSubscribers,
  filmCardAdminPanel,
  editFilm,
});
