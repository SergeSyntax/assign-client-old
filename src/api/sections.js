import Axios from 'axios';
import queryHandler from 'utils/queryHandler';

export const createSection = ({ title, projectId }) =>
  Axios.post(`/projects/${projectId}/sections`, { title });

export const fetchProjects = ({ projectId }, paginationSettings) =>
  Axios.get(`/projects/${projectId}/sections/${queryHandler(paginationSettings)}`);
