import {
  CREATE_TASK_SUCCESS,
  CREATE_TASK_FAILURE,
  CREATE_TASK_REQUEST,
  RENAME_TASK_REQUEST,
  RENAME_TASK_SUCCESS,
  RENAME_TASK_FAILURE,
  SET_DUE_DATE_REQUEST,
  SET_DUE_DATE_SUCCESS,
  SET_DUE_DATE_FAILURE,
} from 'actions/types';
import { fork, takeLatest, call, put, select } from 'redux-saga/effects';
import { requestAlert } from 'actions/alerts';
import * as api from 'api/tasks';
import formatDate from 'utils/formatDate';

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

function* setTaskDueDate({ payload }) {
  try {
    // if the title is the same avoid sending a patch request to the server
    const oldDueDate = yield select(state => state.tasks.taskList[payload.taskId].dueDate);
    if (formatDate(oldDueDate) === formatDate(payload.dueDate)) return;
    const {
      data: { task },
    } = yield call(api.setTaskDueDate, payload);
    yield put({ type: SET_DUE_DATE_SUCCESS, payload: task });
  } catch (err) {
    yield put({ type: SET_DUE_DATE_FAILURE });
    yield put(requestAlert(err));
  }
}

function* watchCreateTaskRequest() {
  yield takeLatest(CREATE_TASK_REQUEST, createTask);
}

function* watchRenameTaskRequest() {
  yield takeLatest(RENAME_TASK_REQUEST, renameTask);
}
function* watchSetTaskDueDateRequest() {
  yield takeLatest(SET_DUE_DATE_REQUEST, setTaskDueDate);
}
export default [
  fork(watchCreateTaskRequest),
  fork(watchRenameTaskRequest),
  fork(watchSetTaskDueDateRequest),
];
