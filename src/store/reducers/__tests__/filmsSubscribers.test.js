import filmSubscribers, { initialState } from "../filmSubscribers";
import {
  fetchSubscribersInitialFailed,
  fetchSubscribersInitialSucceed,
  fetchSubscribersInitialRequested,
  fetchSubscribersNextFailed,
  fetchSubscribersNextRequested,
  fetchSubscribersNextSucceed,
} from "../../actions/filmSubscribersActions";

const getPerfectInitialState = (initial, changed) => ({
  ...initial,
  ...changed,
});

describe("filmsSubscribers reducer", () => {
  it("should return initial state", () => {
    expect(filmSubscribers(undefined, {})).toEqual(initialState);
  });

  it("should handle fetchSubscribersInitialRequested", () => {
    expect(filmSubscribers(initialState, fetchSubscribersInitialRequested())).toEqual(
      getPerfectInitialState(initialState, {
        loading: true,
      })
    );
  });
  it("should handle fetchSubscribersInitialSucceed", () => {
    expect(
      filmSubscribers(
        initialState,
        fetchSubscribersInitialSucceed({ users: [], allCount: 16, orders: [] })
      )
    ).toEqual(
      getPerfectInitialState(initialState, {
        allCount: 16,
        users: [],
        orders: [],
      })
    );
  });
  it("should handle fetchSubscribersInitialFailed", () => {
    expect(
      filmSubscribers(initialState, fetchSubscribersInitialFailed({ message: "Error" }))
    ).toEqual(
      getPerfectInitialState(initialState, {
        error: "Error",
      })
    );
  });

  it("should handle fetchSubscribersNextRequested", () => {
    expect(filmSubscribers(initialState, fetchSubscribersNextRequested())).toEqual(
      getPerfectInitialState(initialState, {
        loading: true,
      })
    );
  });
  it("should handle fetchSubscribersNextSucceed", () => {
    expect(
      filmSubscribers(initialState, fetchSubscribersNextSucceed({ users: [], orders: [] }))
    ).toEqual(
      getPerfectInitialState(initialState, {
        loading: false,
        users: [],
        count: initialState.count + initialState.limit,
        orders: [],
      })
    );
  });
  it("should handle fetchSubscribersNextFailed", () => {
    expect(filmSubscribers(initialState, fetchSubscribersNextFailed({ message: "Error" }))).toEqual(
      getPerfectInitialState(initialState, {
        loading: false,
        error: "Error",
      })
    );
  });
});
