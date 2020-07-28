import {
  CREATE_TASK_SUCCESS,
  CREATE_TASK_FAILURE,
  CREATE_TASK_REQUEST,
  RENAME_TASK_REQUEST,
  RENAME_TASK_SUCCESS,
  RENAME_TASK_FAILURE,
} from 'actions/types';
import { fork, takeLatest, call, put, select } from 'redux-saga/effects';
import { requestAlert } from 'actions/alerts';

import * as api from 'api/tasks';

function* createTask({ payload }) {
  try {
    const {
      data: { task },
    } = yield call(api.createTask, payload);
    yield put({ type: CREATE_TASK_SUCCESS, payload: task });
  } catch (err) {
    yield put({ type: CREATE_TASK_FAILURE });
    yield put(requestAlert(err));
  }
}

function* renameTask({ payload }) {
  try {
    // if the title is the same avoid sending a patch request to the server
    const oldTaskTitle = yield select(state => state.tasks.taskList[payload.taskId].title);
    if (oldTaskTitle === payload.title) return;
    const {
      data: { task },
    } = yield call(api.renameTask, payload);
    yield put({ type: RENAME_TASK_SUCCESS, payload: task });
  } catch (err) {
    yield put({ type: RENAME_TASK_FAILURE });
    yield put(requestAlert(err));
  }
}

function* watchCreateTaskRequest() {
  yield takeLatest(CREATE_TASK_REQUEST, createTask);
}

function* watchRenameTaskRequest() {
  yield takeLatest(RENAME_TASK_REQUEST, renameTask);
}

export default [fork(watchCreateTaskRequest), fork(watchRenameTaskRequest)];
