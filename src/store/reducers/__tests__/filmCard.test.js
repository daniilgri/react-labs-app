import filmCard, { initialState, emptyFilm } from "../filmCard";
import {
  fetchFilmByIdRequested,
  fetchFilmByIdFailed,
  fetchFilmByIdSucceed,
} from "../../actions/filmsActions";

describe("filmCard reducer", () => {
  let fakeFilm;
  beforeEach(() => {
    fakeFilm = emptyFilm;
  });
  it("should return initial state", () => {
    expect(filmCard(undefined, {})).toEqual(initialState);
  });

  it("should handle fetchFilmByIdRequested", () => {
    expect(filmCard(initialState, fetchFilmByIdRequested("iqwdi"))).toEqual({
      loading: true,
      error: "",
      film: fakeFilm,
    });
  });
  it("should handle fetchFilmByIdSucceed", () => {
    expect(filmCard(initialState, fetchFilmByIdSucceed(fakeFilm))).toEqual({
      loading: false,
      error: "",
      film: fakeFilm,
    });
  });
  it("should handle fetchFilmByIdFailed", () => {
    expect(filmCard(initialState, fetchFilmByIdFailed({ message: "Error" }))).toEqual({
      loading: false,
      error: "Error",
      film: fakeFilm,
    });
  });
});
