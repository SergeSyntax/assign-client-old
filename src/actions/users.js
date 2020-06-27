import { CREATE_USER_REQUEST, USER_LOGIN_REQUEST } from './types';

export const createUser = payload => ({
  type: CREATE_USER_REQUEST,
  payload,
});

export const userLogin = payload => ({
  type: USER_LOGIN_REQUEST,
  payload,
});
