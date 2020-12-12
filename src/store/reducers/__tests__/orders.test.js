import orders, { initialState } from "../orders";
import {
  fetchOrdersInitialFailed,
  fetchOrdersInitialSucceed,
  fetchOrdersInitialRequested,
  fetchOrdersNextRequested,
  fetchOrdersNextFailed,
  fetchOrdersNextSucceed,
} from "../../actions/ordersActions";

const getPerfectInitialState = (initial, changed) => ({
  ...initial,
  ...changed,
});

describe("orders reducer", () => {
  it("should return initial state", () => {
    expect(orders(undefined, {})).toEqual(initialState);
  });

  it("should handle fetchOrdersInitialRequested", () => {
    expect(orders(initialState, fetchOrdersInitialRequested())).toEqual(
      getPerfectInitialState(initialState, {
        loading: true,
      })
    );
  });
  it("should handle fetchOrdersInitialSucceed", () => {
    expect(orders(initialState, fetchOrdersInitialSucceed({ allCount: 16, orders: [] }))).toEqual(
      getPerfectInitialState(initialState, {
        allCount: 16,
        orders: [],
      })
    );
  });
  it("should handle fetchOrdersInitialFailed", () => {
    expect(orders(initialState, fetchOrdersInitialFailed({ message: "Error" }))).toEqual(
      getPerfectInitialState(initialState, {
        error: "Error",
      })
    );
  });

  it("should handle fetchOrdersNextRequested", () => {
    expect(orders(initialState, fetchOrdersNextRequested())).toEqual(
      getPerfectInitialState(initialState, {
        loading: true,
      })
    );
  });
  it("should handle fetchOrdersNextSucceed", () => {
    expect(orders(initialState, fetchOrdersNextSucceed({ orders: [] }))).toEqual(
      getPerfectInitialState(initialState, {
        loading: false,
        orders: [],
        count: initialState.count + initialState.limit,
      })
    );
  });
  it("should handle fetchOrdersNextFailed", () => {
    expect(orders(initialState, fetchOrdersNextFailed({ message: "Error" }))).toEqual(
      getPerfectInitialState(initialState, {
        loading: false,
        error: "Error",
      })
    );
  });
});
