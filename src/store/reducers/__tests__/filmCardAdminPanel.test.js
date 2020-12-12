import filmCard, { initialState, emptyFilm } from "../filmCardAdminPanel";

import {
  fetchFilmByIdAdminPanelFailed,
  fetchFilmByIdAdminPanelRequested,
  fetchFilmByIdAdminPanelSucceed,
} from "../../actions/filmsAdminPanelActions";

const getPerfectInitialState = (initial, changed) => ({
  ...initial,
  ...changed,
});

describe("filmCardAdminPanel reducer", () => {
  let fakeFilm;
  beforeEach(() => {
    fakeFilm = emptyFilm;
  });
  it("should return initial state", () => {
    expect(filmCard(undefined, {})).toEqual(initialState);
  });

  it("should handle fetchFilmByIdAdminPanelRequested", () => {
    expect(filmCard(initialState, fetchFilmByIdAdminPanelRequested("iqwdi"))).toEqual(
      getPerfectInitialState(initialState, {
        loading: true,
      })
    );
  });
  it("should handle fetchFilmByIdAdminPanelSucceed", () => {
    expect(filmCard(initialState, fetchFilmByIdAdminPanelSucceed(fakeFilm))).toEqual(
      getPerfectInitialState(initialState, {
        loading: false,
        film: fakeFilm,
      })
    );
  });
  it("should handle fetchFilmByIdAdminPanelFailed", () => {
    expect(filmCard(initialState, fetchFilmByIdAdminPanelFailed({ message: "Error" }))).toEqual(
      getPerfectInitialState(initialState, {
        loading: false,
        error: "Error",
      })
    );
  });
});
