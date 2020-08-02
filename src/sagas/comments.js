import { takeLatest, fork, call, put } from 'redux-saga/effects';
import {
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILURE,
} from 'actions/types';
import * as api from 'api/comments';
import { requestAlert } from 'actions/alerts';

function* createComment({ payload }) {
  try {
    const {
      data: { comment },
    } = yield call(api.createComment, payload);
    yield put({ type: CREATE_COMMENT_SUCCESS, payload: comment });
  } catch (err) {
    yield put({ type: CREATE_COMMENT_FAILURE });
    yield put(requestAlert(err));
  }
}

function* watchCreateCommentRequest() {
  yield takeLatest(CREATE_COMMENT_REQUEST, createComment);
}

export default [fork(watchCreateCommentRequest)];
