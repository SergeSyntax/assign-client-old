import { all } from 'redux-saga/effects';
import users from './users';
import errors from './errors';

export default function* rootSaga() {
  yield all([...users, ...errors]);
}
