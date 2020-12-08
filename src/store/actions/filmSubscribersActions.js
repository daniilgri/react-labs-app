import { createAction } from "redux-actions";

export const fetchSubscribersInitialRequested = createAction(
  "@FILM_SUBSCRIBERS/FETCH_SUBSCRIBERS_INITIAL_REQUESTED",
  payload => payload
);
export const fetchSubscribersInitialSucceed = createAction(
  "@FILM_SUBSCRIBERS/FETCH_SUBSCRIBERS_INITIAL_SUCCEED",
  payload => payload
);
export const fetchSubscribersInitialFailed = createAction(
  "@FILM_SUBSCRIBERS/FETCH_SUBSCRIBERS_INITIAL_FAILED",
  payload => payload
);

export const fetchSubscribersNextRequested = createAction(
  "@FILM_SUBSCRIBERS/FETCH_SUBSCRIBERS_NEXT_REQUESTED",
  payload => payload
);
export const fetchSubscribersNextSucceed = createAction(
  "@FILM_SUBSCRIBERS/FETCH_SUBSCRIBERS_NEXT_SUCCEED",
  payload => payload
);
export const fetchSubscribersNextFailed = createAction(
  "@FILM_SUBSCRIBERS/FETCH_SUBSCRIBERS_NEXT_FAILED",
  payload => payload
);
