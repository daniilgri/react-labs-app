import newOrder, { initialState } from "../newOrder";
import { makeOrderFailed, makeOrderSucceed, makeOrderRequested } from "../../actions/ordersActions";

const getPerfectInitialState = (initial, changed) => ({
  ...initial,
  ...changed,
});

describe("newOrder reducer", () => {
  it("should return initial state", () => {
    expect(newOrder(undefined, {})).toEqual(initialState);
  });

  it("should handle makeOrderRequested", () => {
    expect(newOrder(initialState, makeOrderRequested())).toEqual(
      getPerfectInitialState(initialState, {
        loading: true,
      })
    );
  });
  it("should handle makeOrderSucceed", () => {
    expect(newOrder(initialState, makeOrderSucceed())).toEqual(
      getPerfectInitialState(initialState, {
        loading: false,
      })
    );
  });
  it("should handle makeOrderFailed", () => {
    expect(newOrder(initialState, makeOrderFailed({ message: "Error" }))).toEqual(
      getPerfectInitialState(initialState, {
        error: "Error",
      })
    );
  });
});
