import server from 'config/server';

export const createTask = ({ title, sectionId }) =>
  server.post(`/projects/sections/${sectionId}/tasks/`, { title });

export const renameTask = ({ title, taskId }) =>
  server.patch(`/tasks/${taskId}/rename `, { title });

export const setTaskDueDate = ({ dueDate, taskId }) =>
  server.patch(`/tasks/${taskId}/set-due-date`, { dueDate });

export const setTaskDescription = ({ description, taskId }) =>
  server.patch(`/tasks/${taskId}/set-description `, { description });

export const deleteTask = taskId => server.delete(`/tasks/${taskId}`);
