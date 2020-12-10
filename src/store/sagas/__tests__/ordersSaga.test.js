import "firebase/storage";
import { runSaga } from "redux-saga";

import { makeOrder, fetchOrdersInitial } from "../ordersSaga";
import * as api from "../../../services/ordersAPI";
import {
  makeOrderSucceed,
  makeOrderFailed,
  fetchOrdersInitialSucceed,
  fetchOrdersInitialFailed,
} from "../../actions/ordersActions";

describe("makeOrder saga", () => {
  it("should make order and dispatch success action", async () => {
    const dispatched = [];
    const makeOrderApi = jest
      .spyOn(api, "makeOrderAPI")
      .mockImplementation(() => Promise.resolve());

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      makeOrder,
      [
        {
          filmId: "weffweKweijf",
          screeningDate: { date: "00.00.0000", time: "00:00" },
          userUid: "weojPOwoefj",
        },
      ]
    );

    expect(makeOrderApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([makeOrderSucceed()]);

    makeOrderApi.mockClear();
  });

  it("should make order and dispatch error action", async () => {
    const dispatched = [];
    const makeOrderApi = jest.spyOn(api, "makeOrderAPI").mockImplementation(() => Promise.reject());

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      makeOrder,
      [
        {
          filmId: "weffweKweijf",
          screeningDate: { date: "00.00.0000", time: "00:00" },
          userUid: "weojPOwoefj",
        },
      ]
    );

    expect(makeOrderApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([makeOrderFailed()]);

    makeOrderApi.mockClear();
  });
});

describe("fetchOrdersInitial saga", () => {
  it("should fetch orders initial and dispatch success action", async () => {
    const dispatched = [];
    const getOrdersInitialApi = jest
      .spyOn(api, "getOrdersInitialAPI")
      .mockImplementation(() => Promise.resolve());

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
        getState: () => ({ orders: { limit: 4, query: "query" } }),
      },
      fetchOrdersInitial,
      []
    );

    expect(getOrdersInitialApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([fetchOrdersInitialSucceed()]);

    getOrdersInitialApi.mockClear();
  });

  it("should fetch orders initial and dispatch success action", async () => {
    const dispatched = [];
    const getOrdersInitialApi = jest
      .spyOn(api, "getOrdersInitialAPI")
      .mockImplementation(() => Promise.reject());

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
        getState: () => ({ orders: { limit: 4, query: "query" } }),
      },
      fetchOrdersInitial,
      []
    );

    expect(getOrdersInitialApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([fetchOrdersInitialFailed()]);

    getOrdersInitialApi.mockClear();
  });
});
