import { combineReducers } from "redux";

import addFilm from "./addFilm";
import filmsBoard from "./filmsBoard";
import auth from "./auth";
import filmCard from "./filmCard";
import addScreeningDateModal from "./addScreeningDateModal";
import filmsAdminPanel from "./filmsAdminPanel";
import usersAdminPanel from "./usersAdminPanel";

export default combineReducers({
  addFilm,
  filmsBoard,
  auth,
  filmCard,
  addScreeningDateModal,
  filmsAdminPanel,
  usersAdminPanel,
});
