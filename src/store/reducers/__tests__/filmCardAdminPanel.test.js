import filmCard, { initialState, emptyFilm } from "../filmCardAdminPanel";

import {
  fetchFilmByIdAdminPanelFailed,
  fetchFilmByIdAdminPanelRequested,
  fetchFilmByIdAdminPanelSucceed,
} from "../../actions/filmsAdminPanelActions";

describe("filmCardAdminPanel reducer", () => {
  let fakeFilm;
  beforeEach(() => {
    fakeFilm = emptyFilm;
  });
  it("should return initial state", () => {
    expect(filmCard(undefined, {})).toEqual(initialState);
  });

  it("should handle fetchFilmByIdAdminPanelRequested", () => {
    expect(filmCard(initialState, fetchFilmByIdAdminPanelRequested("iqwdi"))).toEqual({
      loading: true,
      error: "",
      film: fakeFilm,
    });
  });
  it("should handle fetchFilmByIdAdminPanelSucceed", () => {
    expect(filmCard(initialState, fetchFilmByIdAdminPanelSucceed(fakeFilm))).toEqual({
      loading: false,
      error: "",
      film: fakeFilm,
    });
  });
  it("should handle fetchFilmByIdAdminPanelFailed", () => {
    expect(filmCard(initialState, fetchFilmByIdAdminPanelFailed({ message: "Error" }))).toEqual({
      loading: false,
      error: "Error",
      film: fakeFilm,
    });
  });
});
