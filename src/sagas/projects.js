import { takeLatest, fork, put, call, takeEvery, select } from 'redux-saga/effects';
import {
  CREATE_PROJECT_REQUEST,
  FETCH_PROJECTS_REQUEST,
  CREATE_PROJECT_SUCCESS,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE,
  CREATE_PROJECT_FAILURE,
  FETCH_PROJECT_REQUEST,
  FETCH_PROJECT_SUCCESS,
} from 'actions/types';
import { requestFailure } from 'actions/errors';
import * as api from 'api/projects';

function* createProject({ payload }) {
  try {
    const {
      data: { project },
    } = yield call(api.createProject, payload);
    yield put({ type: CREATE_PROJECT_SUCCESS, payload: project });
  } catch (err) {
    yield put({ type: CREATE_PROJECT_FAILURE });
    yield put(requestFailure(err));
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
    yield put(requestFailure(err));
  }
}

function* fetchProject({ payload: id }) {
  const project = yield select(state => state.projects.projectList[id]);
  if (!project) {
    const {
      data: { project },
    } = yield call(api.fetchProject, id);
    yield put({ type: FETCH_PROJECT_SUCCESS, payload: project });
  } else {
    yield put({ type: FETCH_PROJECT_SUCCESS });
  }
}

function* watchCreateProjectRequest() {
  yield takeLatest(CREATE_PROJECT_REQUEST, createProject);
}

function* watchFetchProjectsRequest() {
  yield takeEvery(FETCH_PROJECTS_REQUEST, fetchProjects);
}

function* watchFetchProjectRequest() {
  yield takeEvery(FETCH_PROJECT_REQUEST, fetchProject);
}

export default [
  fork(watchCreateProjectRequest),
  fork(watchFetchProjectsRequest),
  fork(watchFetchProjectRequest),
];
