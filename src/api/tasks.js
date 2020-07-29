import Axios from 'axios';

export const createTask = ({ title, sectionId }) =>
  Axios.post(`/projects/sections/${sectionId}/tasks/`, { title });

export const renameTask = ({ title, taskId }) => Axios.patch(`/tasks/${taskId}/rename `, { title });

export const setTaskDueDate = ({ dueDate, taskId }) =>
  Axios.patch(`/tasks/${taskId}/set-due-date`, { dueDate });
