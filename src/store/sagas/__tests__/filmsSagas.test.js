import "firebase/storage";
import { runSaga } from "redux-saga";

import { fetchFilmsInitial, fetchFilmsNext, fetchFilmById, updateFilmRating } from "../filmsSagas";
import {
  fetchFilmsInitialSucceed,
  fetchFilmsInitialFailed,
  fetchFilmsNextSucceed,
  fetchFilmsNextFailed,
  fetchFilmByIdSucceed,
  fetchFilmByIdFailed,
  updateFilmRatingSucceed,
  updateFilmRatingFailed,
  fetchFilmByIdRequested,
} from "../../actions/filmsActions";
import * as api from "../../../services/filmsAPI";

describe("fetchFilmsInitial saga", () => {
  it("should fetch films initial and dispatch success action", async () => {
    const fakeFilmsData = {
      films: [
        {
          title: "title",
        },
      ],
      allCount: 1,
    };
    const dispatched = [];
    const getFilmsInitialApi = jest
      .spyOn(api, "getFilmsInitialAPI")
      .mockImplementation(() => Promise.resolve(fakeFilmsData));

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
        getState: () => ({ filmsBoard: { limit: 4, query: "query" } }),
      },
      fetchFilmsInitial
    );

    expect(getFilmsInitialApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([fetchFilmsInitialSucceed(fakeFilmsData)]);

    getFilmsInitialApi.mockClear();
  });

  it("should fetch films initial and dispatch error action", async () => {
    const dispatched = [];
    const getFilmsInitialApi = jest
      .spyOn(api, "getFilmsInitialAPI")
      .mockImplementation(() => Promise.reject());

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
        getState: () => ({ filmsBoard: { limit: 4, query: "query" } }),
      },
      fetchFilmsInitial
    );

    expect(getFilmsInitialApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([fetchFilmsInitialFailed()]);

    getFilmsInitialApi.mockClear();
  });
});

describe("fetchFilmsNext saga", () => {
  it("should fetch films next and dispatch success action", async () => {
    const fakeFilmsData = {
      films: [
        {
          title: "title",
        },
      ],
    };
    const dispatched = [];
    const getFilmsNextApi = jest
      .spyOn(api, "getFilmsNextAPI")
      .mockImplementation(() => Promise.resolve(fakeFilmsData));

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
        getState: () => ({ filmsBoard: { limit: 4, query: "query", films: [] } }),
      },
      fetchFilmsNext
    );

    expect(getFilmsNextApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([fetchFilmsNextSucceed(fakeFilmsData)]);

    getFilmsNextApi.mockClear();
  });

  it("should fetch films next and dispatch error action", async () => {
    const dispatched = [];
    const getFilmsNextApi = jest
      .spyOn(api, "getFilmsNextAPI")
      .mockImplementation(() => Promise.reject());

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
        getState: () => ({ filmsBoard: { limit: 4, query: "query", films: [] } }),
      },
      fetchFilmsNext
    );

    expect(getFilmsNextApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([fetchFilmsNextFailed()]);

    getFilmsNextApi.mockClear();
  });
});

describe("fetchFilmById saga", () => {
  it("should fetch film by id and dispatch success action", async () => {
    const fakeFilm = {
      title: "Title",
      id: "eofwoj",
    };
    const dispatched = [];
    const getFilmByIdApi = jest
      .spyOn(api, "getFilmByIdAPI")
      .mockImplementation(() => Promise.resolve(fakeFilm));

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      fetchFilmById,
      { payload: { filmId: "1" } }
    );

    expect(getFilmByIdApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([fetchFilmByIdSucceed(fakeFilm)]);

    getFilmByIdApi.mockClear();
  });

  it("should fetch film by id and dispatch error action", async () => {
    const dispatched = [];
    const getFilmByIdApi = jest
      .spyOn(api, "getFilmByIdAPI")
      .mockImplementation(() => Promise.reject());

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      fetchFilmById,
      { payload: { filmId: "1" } }
    );

    expect(getFilmByIdApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([fetchFilmByIdFailed()]);

    getFilmByIdApi.mockClear();
  });
});

describe("updateFilmRating saga", () => {
  it("should update rating of film and dispatch success action", async () => {
    const dispatched = [];
    const updateFilmRatingApi = jest
      .spyOn(api, "updateFilmRatingAPI")
      .mockImplementation(() => Promise.resolve());

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      updateFilmRating,
      { payload: { filmId: "1" } }
    );

    expect(updateFilmRatingApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([updateFilmRatingSucceed(), fetchFilmByIdRequested("1")]);

    updateFilmRatingApi.mockClear();
  });

  it("should update rating of film and dispatch success action", async () => {
    const dispatched = [];
    const updateFilmRatingApi = jest
      .spyOn(api, "updateFilmRatingAPI")
      .mockImplementation(() => Promise.reject());

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      updateFilmRating,
      { payload: { filmId: "1" } }
    );

    expect(updateFilmRatingApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([updateFilmRatingFailed()]);

    updateFilmRatingApi.mockClear();
  });
});
