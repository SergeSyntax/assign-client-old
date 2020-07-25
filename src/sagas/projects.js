import { takeLatest, fork, put, call, takeEvery } from 'redux-saga/effects';
import {
  CREATE_PROJECT_REQUEST,
  FETCH_PROJECTS_REQUEST,
  CREATE_PROJECT_SUCCESS,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE,
  CREATE_PROJECT_FAILURE,
  FETCH_PROJECT_DATA_REQUEST,
  FETCH_PROJECT_DATA_SUCCESS,
  EDIT_PROJECT_REQUEST,
  EDIT_PROJECT_SUCCESS,
  EDIT_PROJECT_FAILURE,
  DELETE_PROJECT_REQUEST,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAILURE,
} from 'actions/types';
import { requestAlert } from 'actions/alerts';
import * as api from 'api/projects';

function* createProject({ payload }) {
  try {
    const {
      data: { project },
    } = yield call(api.createProject, payload);
    yield put({ type: CREATE_PROJECT_SUCCESS, payload: project });
  } catch (err) {
    yield put({ type: CREATE_PROJECT_FAILURE });
    yield put(requestAlert(err));
  }
}

function* fetchProjects() {
  try {
    const {
      data: { projects },
    } = yield call(api.fetchProjects);
    yield put({ type: FETCH_PROJECTS_SUCCESS, payload: projects });
  } catch (err) {
    yield put({ type: FETCH_PROJECTS_FAILURE });
    yield put(requestAlert(err));
  }
}

function* fetchProjectData({ payload: id }) {
  const {
    data: { project },
  } = yield call(api.fetchProjectData, id);
  yield put({ type: FETCH_PROJECT_DATA_SUCCESS, payload: project });
}

function* editProject({ payload: { id, values } }) {
  try {
    const {
      data: { project },
    } = yield call(api.editProject, id, values);
    yield put({ type: EDIT_PROJECT_SUCCESS, payload: project });
  } catch (err) {
    yield put({ type: EDIT_PROJECT_FAILURE });
    yield put(requestAlert(err));
  }
}

function* deleteProject({ payload }) {
  try {
    yield call(api.deleteProject, payload);
    yield put({ type: DELETE_PROJECT_SUCCESS, payload: payload });
  } catch (err) {
    yield put({ type: DELETE_PROJECT_FAILURE });
    yield put(requestAlert(err));
  }
}

function* watchCreateProjectRequest() {
  yield takeLatest(CREATE_PROJECT_REQUEST, createProject);
}

function* watchFetchProjectsRequest() {
  yield takeEvery(FETCH_PROJECTS_REQUEST, fetchProjects);
}

function* watchFetchProjectDataRequest() {
  yield takeEvery(FETCH_PROJECT_DATA_REQUEST, fetchProjectData);
}

function* watchEditProjectRequest() {
  yield takeLatest(EDIT_PROJECT_REQUEST, editProject);
}

function* watchDeleteProjectRequest() {
  yield takeLatest(DELETE_PROJECT_REQUEST, deleteProject);
}

export default [
  fork(watchCreateProjectRequest),
  fork(watchFetchProjectsRequest),
  fork(watchFetchProjectDataRequest),
  fork(watchEditProjectRequest),
  fork(watchDeleteProjectRequest),
];
