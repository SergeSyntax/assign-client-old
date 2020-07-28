import { CREATE_TASK_REQUEST, RENAME_TASK_REQUEST } from './types';

export const createTask = payload => ({
  type: CREATE_TASK_REQUEST,
  payload,
});

export const renameTask = (payload) => ({
  type: RENAME_TASK_REQUEST,
  payload
})
