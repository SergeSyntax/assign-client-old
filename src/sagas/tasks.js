import { CREATE_TASK_SUCCESS, CREATE_TASK_FAILURE, CREATE_TASK_REQUEST } from 'actions/types';
import { fork, takeLatest, call, put } from 'redux-saga/effects';
import { requestFailure } from 'actions/errors';
import * as api from 'api/tasks';

function* createTask({ payload }) {
  try {
    const {
      data: { task },
    } = yield call(api.createTask, payload);
    yield put({ type: CREATE_TASK_SUCCESS, payload: task });
  } catch (err) {
    yield put({ type: CREATE_TASK_FAILURE });
    yield put(requestFailure(err));
  }
}

function* watchCreateTaskRequest() {
  yield takeLatest(CREATE_TASK_REQUEST, createTask);
}

export default [fork(watchCreateTaskRequest)];
