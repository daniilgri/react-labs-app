import { combineReducers } from "redux";

import addFilm from "./addFilm";
import filmsBoard from "./filmsBoard";

export default combineReducers({ addFilm, filmsBoard });
