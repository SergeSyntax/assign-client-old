import { CREATE_TASK_REQUEST } from './types';

export const createTask = payload => ({
  type: CREATE_TASK_REQUEST,
  payload,
});
