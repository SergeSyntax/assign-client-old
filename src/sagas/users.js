import { fork, call, takeLatest, put, delay } from 'redux-saga/effects';
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
} from 'actions/types';

function* createUser({ payload }) {
  try {
    const data = yield call(api.createUser, payload);
    yield put({ type: CREATE_USER_SUCCESS, payload: data.user });
    Cookies.set('assign-auth-token', data.headers.authorization, { expires: 20 });
    history.push('/dashboard');
  } catch (err) {
    yield put(requestFailure(err));
  }
}

function* useLogin({ payload }) {
  try {
    const data = yield call(api.useLogin, payload);
    yield put({ type: USER_LOGIN_SUCCESS, payload: data.user });
    Cookies.set('assign-auth-token', data.headers.authorization, { expires: 20 });
    history.push('/dashboard');
  } catch (err) {
    yield put(requestFailure(err));
  }
}

function* fetchUser() {
  try {
    yield delay(1000);

    if (Cookies.get('assign-auth-token')) {
      const { data } = yield call(api.fetchUser);
      yield put({ type: FETCH_USER_SUCCESS, payload: data.user });
    } else yield put({ type: FETCH_USER_FAILURE });
  } catch (err) {
    Cookies.remove('assign-auth-token');
    yield put({ type: FETCH_USER_FAILURE });
  }
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

export default [
  fork(watchCreateUserRequest),
  fork(watchUserLoginRequest),
  fork(watchFetchUserRequest),
];
