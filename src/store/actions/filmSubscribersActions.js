import { createAction } from "redux-actions";

export const fetchSubscribersRequested = createAction(
  "@FILM_SUBSCRIBERS/FETCH_SUBSCRIBERS_REQUESTED",
  (payload) => payload
);
export const fetchSubscribersSucceed = createAction(
  "@FILM_SUBSCRIBERS/FETCH_SUBSCRIBERS_SUCCEED",
  (payload) => payload
);
export const fetchSubscribersFailed = createAction(
  "@FILM_SUBSCRIBERS/FETCH_SUBSCRIBERS_FAILED",
  (payload) => payload
);
