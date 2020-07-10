import { fork, put, takeEvery } from 'redux-saga/effects';
import { REQUEST_FAILURE } from 'actions/types';
import { requestFailureAlert } from 'actions/errors';

function* failureAlert({ type, payload }) {
  const { response, name, message } = payload;

  if (/[45]\d\d/.test(message)) yield put(requestFailureAlert(response.data.message));
  else if (name && message) yield put(requestFailureAlert(`${name}: ${message}`));
}

function* watchErrors() {
  yield takeEvery(REQUEST_FAILURE, failureAlert);
}

export default [fork(watchErrors)];
