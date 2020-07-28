import Axios from 'axios';

export const createTask = ({ title, sectionId }) =>
  Axios.post(`/projects/sections/${sectionId}/tasks/`, { title });

export const renameTask = ({ title, taskId }) => Axios.patch(`/tasks/${taskId}`, { title });
