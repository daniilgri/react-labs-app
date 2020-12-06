import editFilm, { initialState, emptyFilm } from "../editFilm";
import {
  editFilmFailed,
  editFilmRequested,
  editFilmSucceed,
  fetchEditFilmFailed,
  fetchEditFilmRequested,
  fetchEditFilmSucceed,
} from "../../actions/filmsAdminPanelActions";

describe("editFilm reducer", () => {
  let fakeFilm;
  beforeEach(() => {
    fakeFilm = emptyFilm;
  });

  it("should return initial state", () => {
    expect(editFilm(undefined, {})).toEqual(initialState);
  });

  it("should handle editFilmRequested", () => {
    expect(editFilm(initialState, editFilmRequested())).toEqual({
      loading: true,
      error: "",
      film: fakeFilm,
    });
  });
  it("should handle editFilmSucceed", () => {
    expect(editFilm(initialState, editFilmSucceed())).toEqual({
      loading: false,
      error: "",
      film: fakeFilm,
    });
  });
  it("should handle editFilmFailed", () => {
    expect(editFilm(initialState, editFilmFailed({ message: "Error" }))).toEqual({
      loading: false,
      error: "Error",
      film: fakeFilm,
    });
  });

  it("should handle fetchEditFilmRequested", () => {
    expect(editFilm(initialState, fetchEditFilmRequested("wfewfnij"))).toEqual({
      loading: true,
      error: "",
      film: fakeFilm,
    });
  });
  it("should handle fetchEditFilmSucceed", () => {
    expect(editFilm(initialState, fetchEditFilmSucceed(fakeFilm))).toEqual({
      loading: false,
      error: "",
      film: fakeFilm,
    });
  });
  it("should handle fetchEditFilmFailed", () => {
    expect(editFilm(initialState, fetchEditFilmFailed({ message: "Error" }))).toEqual({
      error: "Error",
      loading: false,
      film: fakeFilm,
    });
  });
});
