import Axios from 'axios';
import queryHandler from 'utils/queryHandler';

export const createSection = ({ title, projectId }) =>
  Axios.post(`/projects/${projectId}/sections`, { title });


export const fetchSections = (
  projectId,
  paginationSettings = { page: 0, limit: 0, order: [{ col: 'createdAt', direction: 'ASC' }] }
) => Axios.get(`/projects/${projectId}/sections/${queryHandler(paginationSettings)}`);
