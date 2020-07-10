import { fork, call, takeLatest, put, delay, take, select } from 'redux-saga/effects';
import Cookies from 'js-cookie';
import history from '../history';
import { requestFailure } from 'actions/errors';
import * as api from '../api/users';
import {
  CREATE_USER_REQUEST,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  FETCH_USER_REQUEST,
  CREATE_USER_SUCCESS,
  USER_LOGOUT_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from 'actions/types';
import Axios from 'axios';
import AuthCookie from 'utils/AuthCookie';

const setDefaultHeaders = authToken => {
  Axios.defaults.headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${authToken}`,
  };
};

function* redirect(location = '/dashboard') {
  yield call(history.push, location);
}

function* createUser({ payload }) {
  try {
    const {
      data: { user: userInfo },
      headers: { authorization: authToken },
    } = yield call(api.createUser, payload);
    yield call(setDefaultHeaders, authToken);
    yield call(AuthCookie.set, authToken);
    yield put({
      type: USER_LOGIN_SUCCESS,
      payload: { userInfo, authToken },
    });
    yield call(redirect);
  } catch (err) {
    yield put(requestFailure(err));
  }
}

function* useLogin({ payload }) {
  try {
    const {
      data: { user: userInfo },
      headers: { authorization: authToken },
    } = yield call(api.useLogin, payload);
    yield call(setDefaultHeaders, authToken);
    yield call(AuthCookie.set, authToken);
    yield put({
      type: USER_LOGIN_SUCCESS,
      payload: { userInfo, authToken },
    });
    yield call(redirect);
  } catch (err) {
    yield put(requestFailure(err));
  }
}

function* fetchUser() {
  try {
    const authToken = yield select(state => state.users.authToken);

    if (authToken) {
      yield call(setDefaultHeaders, authToken);

      const {
        data: { user: userInfo },
      } = yield call(api.fetchUser);

      yield put({ type: FETCH_USER_SUCCESS, payload: { userInfo, authToken } });
    } else yield put({ type: FETCH_USER_FAILURE });
  } catch (err) {
    yield call(AuthCookie.clear);
    yield put({ type: FETCH_USER_FAILURE });
  }
}

function* userLogout() {
  yield call(AuthCookie.clear);
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
