import { combineReducers } from "redux";

import addFilm from "./addFilm";
import filmsBoard from "./filmsBoard";
import auth from "./auth";
import filmCard from "./filmCard";

export default combineReducers({ addFilm, filmsBoard, auth, filmCard });
