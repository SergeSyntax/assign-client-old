import { SHOW_ALERT, REQUEST_ALERT, CLEAR_ALERT } from './types';

export const requestAlert = payload => ({
  type: REQUEST_ALERT,
  payload,
});

export const showAlert = payload => ({
  type: SHOW_ALERT,
  payload,
});

export const clearAlert = () => ({
  type: CLEAR_ALERT,
});

