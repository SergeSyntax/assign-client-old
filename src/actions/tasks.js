import { CREATE_TASK_REQUEST, RENAME_TASK_REQUEST, SET_DUE_DATE_REQUEST, SET_TASK_DESCRIPTION_REQUEST } from './types';

export const createTask = payload => ({
  type: CREATE_TASK_REQUEST,
  payload,
});

export const renameTask = payload => ({
  type: RENAME_TASK_REQUEST,
  payload,
});

export const setTaskDueDate = payload => ({
  type: SET_DUE_DATE_REQUEST,
  payload,
});

export const setTaskDescription = (payload) => ({
  type: SET_TASK_DESCRIPTION_REQUEST,
  payload
})
