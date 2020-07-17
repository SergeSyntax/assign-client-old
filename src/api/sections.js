import Axios from 'axios';

export const createSection = ({ title, projectId }) =>
  Axios.post(`/projects/${projectId}/sections`, { title });
