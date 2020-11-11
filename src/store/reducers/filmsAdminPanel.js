import { handleActions } from "redux-actions";
import produce from "immer";

import {
  fetchFilmsAdminPanelInitialRequested,
  fetchFilmsAdminPanelInitialFailed,
  fetchFilmsAdminPanelInitialSucceed,
} from "../actions/filmsAdminPanelActions";

const initialState = {
  loading: false,
  error: "",
  films: [],
};

const filmsAdminPanel = handleActions(
  {
    [fetchFilmsAdminPanelInitialRequested]: produce((state) => {
      console.log("false");
      state.loading = true;
    }),
    [fetchFilmsAdminPanelInitialSucceed]: produce((state, { payload }) => {
      console.log("lol");
      state.loading = false;

      state.films = payload;
    }),
    [fetchFilmsAdminPanelInitialFailed]: produce(
      (state, { payload: { message } }) => {
        state.loading = false;
        state.error = message;
      }
    ),
  },
  initialState
);

export default filmsAdminPanel;
