import "firebase/storage";
import { runSaga } from "redux-saga";

import * as api from "../../../services/filmsAPI";
import * as usersAPI from "../../../services/usersAPI";
import {
  addFilm,
  deleteFilm,
  editFilm,
  fetchEditFilm,
  fetchFilmByIdAdminPanel,
  fetchFilmsAdminPanelInitial,
  fetchFilmsAdminPanelNext,
  fetchSubscribersInitial,
  fetchSubscribersNext,
} from "../filmsAdminPanelSagas";
import {
  fetchSubscribersInitialFailed,
  fetchSubscribersInitialSucceed,
  fetchSubscribersNextFailed,
  fetchSubscribersNextSucceed,
} from "../../actions/filmSubscribersActions";
import {
  addFilmFailed,
  addFilmSucceed,
  editFilmFailed,
  editFilmSucceed,
  fetchEditFilmFailed,
  fetchEditFilmSucceed,
  fetchFilmsAdminPanelInitialRequested,
  deleteFilmFailed,
  deleteFilmSucceed,
  fetchFilmByIdAdminPanelFailed,
  fetchFilmByIdAdminPanelSucceed,
  fetchFilmsAdminPanelInitialFailed,
  fetchFilmsAdminPanelInitialSucceed,
  fetchFilmsAdminPanelNextFailed,
  fetchFilmsAdminPanelNextSucceed,
} from "../../actions/filmsAdminPanelActions";

describe("addFilm saga", () => {
  it("should add film and dispatch success action", async () => {
    const dispatched = [];
    const addFilmApi = jest.spyOn(api, "addFilmAPI").mockImplementation(() => Promise.resolve());

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      addFilm,
      {
        payload: {
          title: "",
          description: "",
          ticketPrice: "",
          image: "",
          tags: [],
          screeningDates: [],
          rates: [],
        },
      }
    );

    expect(addFilmApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([addFilmSucceed()]);

    addFilmApi.mockClear();
  });

  it("should add film and dispatch error action", async () => {
    const dispatched = [];
    const addFilmApi = jest.spyOn(api, "addFilmAPI").mockImplementation(() => Promise.reject());

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      addFilm,
      {
        payload: {
          title: "",
          description: "",
          ticketPrice: "",
          image: "",
          tags: [],
          screeningDates: [],
          rates: [],
        },
      }
    );

    expect(addFilmApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([addFilmFailed()]);

    addFilmApi.mockClear();
  });
});

describe("editFilm saga", () => {
  it("should edit film and dispatch success action", async () => {
    const dispatched = [];
    const editFilmApi = jest.spyOn(api, "editFilmAPI").mockImplementation(() => Promise.resolve());

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      editFilm,
      {
        payload: {
          values: {
            title: "",
            description: "",
            ticketPrice: "",
            image: "",
            tags: [],
            screeningDates: [],
            rates: [],
          },
          changedValues: {
            title: "title",
          },
          filmId: "deer",
        },
      }
    );

    expect(editFilmApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([editFilmSucceed()]);

    editFilmApi.mockClear();
  });

  it("should edit film and dispatch error action", async () => {
    const dispatched = [];
    const editFilmApi = jest.spyOn(api, "editFilmAPI").mockImplementation(() => Promise.reject());

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      editFilm,
      {
        payload: {
          values: {
            title: "",
            description: "",
            ticketPrice: "",
            image: "",
            tags: [],
            screeningDates: [],
            rates: [],
          },
          changedValues: {
            title: "title",
          },
          filmId: "deer",
        },
      }
    );

    expect(editFilmApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([editFilmFailed()]);

    editFilmApi.mockClear();
  });
});

describe("fetchEditFilm saga", () => {
  it("should fetch editing film and dispatch success action", async () => {
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
      fetchEditFilm,
      {
        payload: {
          filmId: "deer",
        },
      }
    );

    expect(getFilmByIdApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([fetchEditFilmSucceed(fakeFilm)]);

    getFilmByIdApi.mockClear();
  });

  it("should fetch editing film and dispatch error action", async () => {
    const dispatched = [];

    const getFilmByIdApi = jest
      .spyOn(api, "getFilmByIdAPI")
      .mockImplementation(() => Promise.reject());

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      fetchEditFilm,
      {
        payload: {
          filmId: "deer",
        },
      }
    );

    expect(getFilmByIdApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([fetchEditFilmFailed()]);

    getFilmByIdApi.mockClear();
  });
});

describe("fetchFilmsAdminPanelInitial saga", () => {
  it("should fetch films initial in admin panel and dispatch success action", async () => {
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
        getState: () => ({ filmsAdminPanel: { limit: 4, query: "query" } }),
      },
      fetchFilmsAdminPanelInitial
    );

    expect(getFilmsInitialApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([fetchFilmsAdminPanelInitialSucceed(fakeFilmsData)]);

    getFilmsInitialApi.mockClear();
  });

  it("should fetch films initial in admin panel and dispatch error action", async () => {
    const dispatched = [];
    const getFilmsInitialApi = jest
      .spyOn(api, "getFilmsInitialAPI")
      .mockImplementation(() => Promise.reject());

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
        getState: () => ({ filmsAdminPanel: { limit: 4, query: "query" } }),
      },
      fetchFilmsAdminPanelInitial
    );

    expect(getFilmsInitialApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([fetchFilmsAdminPanelInitialFailed()]);

    getFilmsInitialApi.mockClear();
  });
});

describe("fetchFilmsAdminPanelNext saga", () => {
  it("should fetch films next in admin panel and dispatch success action", async () => {
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
        getState: () => ({ filmsAdminPanel: { limit: 4, query: "query", films: [] } }),
      },
      fetchFilmsAdminPanelNext
    );

    expect(getFilmsNextApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([fetchFilmsAdminPanelNextSucceed(fakeFilmsData)]);

    getFilmsNextApi.mockClear();
  });

  it("should fetch films next in admin panel and dispatch error action", async () => {
    const dispatched = [];
    const getFilmsNextApi = jest
      .spyOn(api, "getFilmsNextAPI")
      .mockImplementation(() => Promise.reject());

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
        getState: () => ({ filmsAdminPanel: { limit: 4, query: "query", films: [] } }),
      },
      fetchFilmsAdminPanelNext
    );

    expect(getFilmsNextApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([fetchFilmsAdminPanelNextFailed()]);

    getFilmsNextApi.mockClear();
  });
});

describe("deleteFilm saga", () => {
  it("should delete film and dispatch success action", async () => {
    const dispatched = [];
    const deleteFilmApi = jest
      .spyOn(api, "deleteFilmAPI")
      .mockImplementation(() => Promise.resolve());

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      deleteFilm,
      {
        payload: {
          filmId: "1",
        },
      }
    );

    expect(deleteFilmApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([deleteFilmSucceed(), fetchFilmsAdminPanelInitialRequested()]);

    deleteFilmApi.mockClear();
  });

  it("should delete film and dispatch error action", async () => {
    const dispatched = [];
    const deleteFilmApi = jest
      .spyOn(api, "deleteFilmAPI")
      .mockImplementation(() => Promise.reject());

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      deleteFilm,
      {
        payload: {
          filmId: "1",
        },
      }
    );

    expect(deleteFilmApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([deleteFilmFailed()]);

    deleteFilmApi.mockClear();
  });
});

describe("fetchFilmByIdAdminPanel saga", () => {
  it("should fetch film by id in admin panel and dispatch success action", async () => {
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
      fetchFilmByIdAdminPanel,
      { payload: { filmId: "1" } }
    );

    expect(getFilmByIdApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([fetchFilmByIdAdminPanelSucceed(fakeFilm)]);

    getFilmByIdApi.mockClear();
  });

  it("should fetch film by id in admin panel and dispatch error action", async () => {
    const dispatched = [];
    const getFilmByIdApi = jest
      .spyOn(api, "getFilmByIdAPI")
      .mockImplementation(() => Promise.reject());

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      fetchFilmByIdAdminPanel,
      { payload: { filmId: "1" } }
    );

    expect(getFilmByIdApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([fetchFilmByIdAdminPanelFailed()]);

    getFilmByIdApi.mockClear();
  });
});

describe("fetchSubscribersInitial saga", () => {
  it("should fetch subscribers on film initial and dispatch success action", async () => {
    const fakeSubscribersData = {
      users: [{ title: "title" }],
      allCount: 1,
      orders: {
        filmId: "weffweKweijf",
        screeningDate: { date: "00.00.0000", time: "00:00" },
        userUid: "weojPOwoefj",
      },
    };
    const dispatched = [];
    const fetchFilmSubscribersInitialApi = jest
      .spyOn(usersAPI, "fetchFilmSubscribersInitialAPI")
      .mockImplementation(() => Promise.resolve(fakeSubscribersData));

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
        getState: () => ({ filmSubscribers: { limit: 4 } }),
      },
      fetchSubscribersInitial,
      {
        payload: {
          filmId: "id",
        },
      }
    );

    expect(fetchFilmSubscribersInitialApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([fetchSubscribersInitialSucceed(fakeSubscribersData)]);

    fetchFilmSubscribersInitialApi.mockClear();
  });

  it("should fetch subscribers on film initial and dispatch error action", async () => {
    const dispatched = [];
    const fetchFilmSubscribersInitialApi = jest
      .spyOn(usersAPI, "fetchFilmSubscribersInitialAPI")
      .mockImplementation(() => Promise.reject());

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
        getState: () => ({ filmSubscribers: { limit: 4 } }),
      },
      fetchSubscribersInitial,
      {
        payload: {
          filmId: "id",
        },
      }
    );

    expect(fetchFilmSubscribersInitialApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([fetchSubscribersInitialFailed()]);

    fetchFilmSubscribersInitialApi.mockClear();
  });
});

describe("fetchSubscribersNext saga", () => {
  it("should fetch subscribers on film next and dispatch success action", async () => {
    const fakeSubscribersData = {
      users: [{ title: "title" }],
      allCount: 1,
      orders: {
        filmId: "weffweKweijf",
        screeningDate: { date: "00.00.0000", time: "00:00" },
        userUid: "weojPOwoefj",
      },
    };
    const dispatched = [];
    const fetchFilmSubscribersNextApi = jest
      .spyOn(usersAPI, "fetchFilmSubscribersNextAPI")
      .mockImplementation(() => Promise.resolve(fakeSubscribersData));

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
        getState: () => ({ filmSubscribers: { limit: 4, orders: [] } }),
      },
      fetchSubscribersNext,
      {
        payload: {
          filmId: "id",
        },
      }
    );

    expect(fetchFilmSubscribersNextApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([fetchSubscribersNextSucceed(fakeSubscribersData)]);

    fetchFilmSubscribersNextApi.mockClear();
  });

  it("should fetch subscribers on film next and dispatch error action", async () => {
    const dispatched = [];
    const fetchFilmSubscribersNextApi = jest
      .spyOn(usersAPI, "fetchFilmSubscribersNextAPI")
      .mockImplementation(() => Promise.reject());

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
        getState: () => ({ filmSubscribers: { limit: 4, orders: [] } }),
      },
      fetchSubscribersNext,
      {
        payload: {
          filmId: "id",
        },
      }
    );

    expect(fetchFilmSubscribersNextApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([fetchSubscribersNextFailed()]);

    fetchFilmSubscribersNextApi.mockClear();
  });
});
