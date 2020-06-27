import { fork, call, takeLatest, apply, put } from 'redux-saga/effects';
import * as api from '../api/users';
import { CREATE_USER_REQUEST, USER_LOGIN_REQUEST } from 'actions/types';
import { requestFailure } from 'actions/errors';
import Cookies from 'js-cookie';

function* createUser({ type, payload }) {
  try {
    const data = yield call(api.createUser, payload);
    console.log(data);
  } catch (err) {
    yield put(requestFailure(err));
  }
}

function* useLogin({ type, payload }) {
  try {
    const data = yield call(api.useLogin, payload);
    Cookies.set('assign-auth', data.headers.authorization, { expires: 20 });

  } catch (err) {
    yield put(requestFailure(err));
  }
}

function* watchCreateUserRequest() {
  yield takeLatest(CREATE_USER_REQUEST, createUser);
}

function* watchUserLoginRequest() {
  yield takeLatest(USER_LOGIN_REQUEST, useLogin);
}

export default [fork(watchCreateUserRequest), fork(watchUserLoginRequest)];
