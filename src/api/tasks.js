import request from 'utils/request';

export const createTask = ({ title, sectionId }) =>
  request.post(`/projects/sections/${sectionId}/tasks/`, { title });

export const renameTask = ({ title, taskId }) =>
  request.patch(`/tasks/${taskId}/rename `, { title });

export const setTaskDueDate = ({ dueDate, taskId }) =>
  request.patch(`/tasks/${taskId}/set-due-date`, { dueDate });

export const setTaskDescription = ({ description, taskId }) =>
  request.patch(`/tasks/${taskId}/set-description `, { description });
