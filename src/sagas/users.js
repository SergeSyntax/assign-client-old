import { fork, call, takeLatest, put, delay, take } from 'redux-saga/effects';
import Cookies from 'js-cookie';
import history from '../history';
import { requestFailure } from 'actions/errors';
import * as api from '../api/users';
import {
  CREATE_USER_REQUEST,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  CREATE_USER_SUCCESS,
  USER_LOGOUT_REQUEST,
} from 'actions/types';

const AUTH_COOKIE = 'assign-auth-token';

const createAuthCookie = token => Cookies.set(AUTH_COOKIE, token, { expires: 20 });

const isAuth = () => Boolean(Cookies.get(AUTH_COOKIE));

const clearAuthCookie = () => Cookies.remove(AUTH_COOKIE);

function* redirect(location = '/dashboard') {
  yield call(history.push, location);
}

function* createUser({ payload }) {
  try {
    const { data, headers } = yield call(api.createUser, payload);
    yield put({ type: CREATE_USER_SUCCESS, payload: data.user });
    yield call(createAuthCookie, headers.authorization);
    redirect();
  } catch (err) {
    yield put(requestFailure(err));
  }
}

function* useLogin({ payload }) {
  try {
    const { data, headers } = yield call(api.useLogin, payload);
    yield put({ type: USER_LOGIN_SUCCESS, payload: data.user });
    yield call(createAuthCookie, headers.authorization);
    redirect();
  } catch (err) {
    yield put(requestFailure(err));
  }
}

function* fetchUser() {
  try {
    if (isAuth()) {
      const { data } = yield call(api.fetchUser);
      yield delay(1000);
      yield put({ type: FETCH_USER_SUCCESS, payload: data.user });
    } else yield put({ type: FETCH_USER_FAILURE });
  } catch (err) {
    yield call(clearAuthCookie);
    yield put({ type: FETCH_USER_FAILURE });
  }
}

function* userLogout() {
  yield call(clearAuthCookie);
  window.location.href = '/';
}

function* watchCreateUserRequest() {
  yield takeLatest(CREATE_USER_REQUEST, createUser);
}

function* watchUserLoginRequest() {
  yield takeLatest(USER_LOGIN_REQUEST, useLogin);
}

function* watchFetchUserRequest() {
  yield takeLatest(FETCH_USER_REQUEST, fetchUser);
}

function* watchUserLogoutRequest() {
  yield take(USER_LOGOUT_REQUEST);
  yield call(userLogout);
}

export default [
  fork(watchCreateUserRequest),
  fork(watchUserLoginRequest),
  fork(watchFetchUserRequest),
  fork(watchUserLogoutRequest),
];
