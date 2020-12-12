import editFilm, { initialState, emptyFilm } from "../editFilm";
import {
  editFilmFailed,
  editFilmRequested,
  editFilmSucceed,
  fetchEditFilmFailed,
  fetchEditFilmRequested,
  fetchEditFilmSucceed,
} from "../../actions/filmsAdminPanelActions";

const getPerfectInitialState = (initial, changed) => ({
  ...initial,
  ...changed,
});

describe("editFilm reducer", () => {
  let fakeFilm;
  beforeEach(() => {
    fakeFilm = emptyFilm;
  });

  it("should return initial state", () => {
    expect(editFilm(undefined, {})).toEqual(initialState);
  });

  it("should handle editFilmRequested", () => {
    expect(editFilm(initialState, editFilmRequested())).toEqual(
      getPerfectInitialState(initialState, {
        loading: true,
      })
    );
  });
  it("should handle editFilmSucceed", () => {
    expect(editFilm(initialState, editFilmSucceed())).toEqual(
      getPerfectInitialState(initialState, {
        loading: false,
        film: fakeFilm,
      })
    );
  });
  it("should handle editFilmFailed", () => {
    expect(editFilm(initialState, editFilmFailed({ message: "Error" }))).toEqual(
      getPerfectInitialState(initialState, {
        loading: false,
        error: "Error",
      })
    );
  });

  it("should handle fetchEditFilmRequested", () => {
    expect(editFilm(initialState, fetchEditFilmRequested("wfewfnij"))).toEqual(
      getPerfectInitialState(initialState, {
        loading: true,
      })
    );
  });
  it("should handle fetchEditFilmSucceed", () => {
    expect(editFilm(initialState, fetchEditFilmSucceed(fakeFilm))).toEqual(
      getPerfectInitialState(initialState, {
        loading: false,
        film: fakeFilm,
      })
    );
  });
  it("should handle fetchEditFilmFailed", () => {
    expect(editFilm(initialState, fetchEditFilmFailed({ message: "Error" }))).toEqual(
      getPerfectInitialState(initialState, {
        error: "Error",
        loading: false,
      })
    );
  });
});
