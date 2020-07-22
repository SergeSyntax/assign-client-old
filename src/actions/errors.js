import { REQUEST_FAILURE_ALERT, REQUEST_FAILURE, CLEAR_FAILURE_ALERT } from './types';

export const requestFailure = payload => ({
  type: REQUEST_FAILURE,
  payload,
});

export const requestFailureAlert = payload => ({
  type: REQUEST_FAILURE_ALERT,
  payload,
});

export const clearFailureAlert = () => ({
  type: CLEAR_FAILURE_ALERT,
});

