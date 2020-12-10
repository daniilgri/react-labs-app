import "firebase/storage";
import { runSaga } from "redux-saga";

import { makeOrder, fetchOrdersInitial, fetchOrdersNext, cancelOrder } from "../ordersSaga";
import * as api from "../../../services/ordersAPI";
import {
  makeOrderSucceed,
  makeOrderFailed,
  fetchOrdersInitialSucceed,
  fetchOrdersInitialFailed,
  fetchOrdersInitialRequested,
  fetchOrdersNextFailed,
  fetchOrdersNextSucceed,
  cancelOrderFailed,
  cancelOrderSucceed,
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
      {
        payload: {
          filmId: "weffweKweijf",
          screeningDate: { date: "00.00.0000", time: "00:00" },
          userUid: "weojPOwoefj",
        },
      }
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
      {
        payload: {
          filmId: "weffweKweijf",
          screeningDate: { date: "00.00.0000", time: "00:00" },
          userUid: "weojPOwoefj",
        },
      }
    );

    expect(makeOrderApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([makeOrderFailed()]);

    makeOrderApi.mockClear();
  });
});

describe("fetchOrdersInitial saga", () => {
  it("should fetch orders initial and dispatch success action", async () => {
    const fakeOrdersData = {
      orders: [
        {
          film: { title: "title" },
          screeningDate: { date: "00.00.0000", time: "00:00" },
          userUid: "",
        },
      ],
      allCount: 1,
    };
    const dispatched = [];
    const getOrdersInitialApi = jest
      .spyOn(api, "getOrdersInitialAPI")
      .mockImplementation(() => Promise.resolve(fakeOrdersData));

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
        getState: () => ({ orders: { limit: 4, query: "query" } }),
      },
      fetchOrdersInitial
    );

    expect(getOrdersInitialApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([fetchOrdersInitialSucceed(fakeOrdersData)]);

    getOrdersInitialApi.mockClear();
  });

  it("should fetch orders initial and dispatch error action", async () => {
    const dispatched = [];
    const getOrdersInitialApi = jest
      .spyOn(api, "getOrdersInitialAPI")
      .mockImplementation(() => Promise.reject());

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
        getState: () => ({ orders: { limit: 4, query: "query" } }),
      },
      fetchOrdersInitial
    );

    expect(getOrdersInitialApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([fetchOrdersInitialFailed()]);

    getOrdersInitialApi.mockClear();
  });
});

describe("fetchOrdersNext saga", () => {
  it("should fetch orders next and dispatch success action", async () => {
    const fakeOrdersData = {
      orders: [
        {
          film: { title: "title" },
          screeningDate: { date: "00.00.0000", time: "00:00" },
          userUid: "",
        },
      ],
      allCount: 1,
    };
    const dispatched = [];
    const getOrdersNextApi = jest
      .spyOn(api, "getOrdersNextAPI")
      .mockImplementation(() => Promise.resolve(fakeOrdersData));

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
        getState: () => ({ orders: { limit: 4, query: "query", orders: [] } }),
      },
      fetchOrdersNext
    );

    expect(getOrdersNextApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([fetchOrdersNextSucceed(fakeOrdersData)]);

    getOrdersNextApi.mockClear();
  });

  it("should fetch orders next and dispatch error action", async () => {
    const dispatched = [];
    const getOrdersNextApi = jest
      .spyOn(api, "getOrdersNextAPI")
      .mockImplementation(() => Promise.reject());

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
        getState: () => ({ orders: { limit: 4, query: "query", orders: [] } }),
      },
      fetchOrdersNext
    );

    expect(getOrdersNextApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([fetchOrdersNextFailed()]);

    getOrdersNextApi.mockClear();
  });
});

describe("cancelOrder saga", () => {
  it("should cancel order and dispatch success action", async () => {
    const dispatched = [];
    const cancelOrderApi = jest
      .spyOn(api, "cancelOrderAPI")
      .mockImplementation(() => Promise.resolve());

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      cancelOrder,
      {
        payload: {
          orderId: "1",
        },
      }
    );

    expect(cancelOrderApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([cancelOrderSucceed(), fetchOrdersInitialRequested()]);

    cancelOrderApi.mockClear();
  });

  it("should cancel order and dispatch error action", async () => {
    const dispatched = [];
    const cancelOrderApi = jest
      .spyOn(api, "cancelOrderAPI")
      .mockImplementation(() => Promise.reject());

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      cancelOrder,
      {
        payload: {
          orderId: "1",
        },
      }
    );

    expect(cancelOrderApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([cancelOrderFailed()]);

    cancelOrderApi.mockClear();
  });
});
