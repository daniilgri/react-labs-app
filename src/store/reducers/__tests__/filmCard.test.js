import filmCard, { initialState, emptyFilm } from "../filmCard";
import {
  fetchFilmByIdRequested,
  fetchFilmByIdFailed,
  fetchFilmByIdSucceed,
} from "../../actions/filmsActions";

const getPerfectInitialState = (initial, changed) => ({
  ...initial,
  ...changed,
});

describe("filmCard reducer", () => {
  let fakeFilm;
  beforeEach(() => {
    fakeFilm = emptyFilm;
  });
  it("should return initial state", () => {
    expect(filmCard(undefined, {})).toEqual(initialState);
  });

  it("should handle fetchFilmByIdRequested", () => {
    expect(filmCard(initialState, fetchFilmByIdRequested("iqwdi"))).toEqual(
      getPerfectInitialState(initialState, {
        loading: true,
      })
    );
  });
  it("should handle fetchFilmByIdSucceed", () => {
    expect(filmCard(initialState, fetchFilmByIdSucceed(fakeFilm))).toEqual(
      getPerfectInitialState(initialState, {
        loading: false,
        film: fakeFilm,
      })
    );
  });
  it("should handle fetchFilmByIdFailed", () => {
    expect(filmCard(initialState, fetchFilmByIdFailed({ message: "Error" }))).toEqual(
      getPerfectInitialState(initialState, {
        loading: false,
        error: "Error",
      })
    );
  });
});
