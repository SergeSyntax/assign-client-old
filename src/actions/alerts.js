import { SHOW_ALERT, REQUEST_ALERT, CLEAR_ALERT, SHOW_FAILURE_ALERT } from './types';

export const requestAlert = payload => ({
  type: REQUEST_ALERT,
  payload,
});

export const showFailureAlert = payload => ({
  type: SHOW_FAILURE_ALERT,
  payload,
});

export const showAlert = payload => ({
  type: SHOW_ALERT,
  payload,
});

export const clearAlert = () => ({
  type: CLEAR_ALERT,
});
