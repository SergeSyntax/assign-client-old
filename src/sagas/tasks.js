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
  SET_TASK_DESCRIPTION_SUCCESS,
  SET_TASK_DESCRIPTION_FAILURE,
  SET_TASK_DESCRIPTION_REQUEST,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILURE,
  DELETE_TASK_REQUEST,
} from 'actions/types';
import { fork, takeLatest, call, put, select } from 'redux-saga/effects';
import { requestAlert, showAlert } from 'actions/alerts';
import * as api from 'api/tasks';
import {formatDataForMaterialUI} from 'utils/formatDate';

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
    yield put(showAlert('renaming task...'));
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
    // if the dueDate is the same avoid sending a patch request to the server
    const oldDueDate = yield select(state => state.tasks.taskList[payload.taskId].dueDate);
    if (formatDataForMaterialUI(oldDueDate) === formatDataForMaterialUI(payload.dueDate)) return;
    yield put(showAlert("saving task's due date..."));

    const {
      data: { task },
    } = yield call(api.setTaskDueDate, payload);
    yield put({ type: SET_DUE_DATE_SUCCESS, payload: task });
  } catch (err) {
    yield put({ type: SET_DUE_DATE_FAILURE });
    yield put(requestAlert(err));
  }
}

function* setTaskDescription({ payload }) {
  try {
    // if the description is the same avoid sending a patch request to the server
    const oldTaskDescription = yield select(
      state => state.tasks.taskList[payload.taskId].description
    );
    if (oldTaskDescription === payload.description) return;
    yield put(showAlert("saving task's description..."));

    const {
      data: { task },
    } = yield call(api.setTaskDescription, payload);
    yield put({ type: SET_TASK_DESCRIPTION_SUCCESS, payload: task });
  } catch (err) {
    yield put({ type: SET_TASK_DESCRIPTION_FAILURE });
    yield put(requestAlert(err));
  }
}

function* deleteTask({ payload }) {
  try {
    yield call(api.deleteTask, payload);
    yield put(showAlert("deleting task..."));
    yield put({ type: DELETE_TASK_SUCCESS, payload });
  } catch (err) {
    yield put({ type: DELETE_TASK_FAILURE });
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
function* watchSetTaskDescriptionRequest() {
  yield takeLatest(SET_TASK_DESCRIPTION_REQUEST, setTaskDescription);
}

function* watchDeleteTaskRequest() {
  yield takeLatest(DELETE_TASK_REQUEST, deleteTask);
}

export default [
  fork(watchCreateTaskRequest),
  fork(watchRenameTaskRequest),
  fork(watchSetTaskDueDateRequest),
  fork(watchSetTaskDescriptionRequest),
  fork(watchDeleteTaskRequest),
];
