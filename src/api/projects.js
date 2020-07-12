import Axios from 'axios';

export const createProject = values => Axios.post('/projects', values);

export const fetchProjects = (
  paginationSettings = { page: 0, limit: 0, order: [{ col: 'createdAt', direction: 'DESC' }] }
) =>
  Axios.get(
    `/projects?page=${paginationSettings.page}&limit=${
      paginationSettings.limit
    }${paginationSettings.order.reduce((prev, { col, direction }, i) => {
      return prev + `&order[${i}][col]=${col}&order[${i}][direction]=${direction}`;
    }, '')}`
  );

export const fetchProject = id => Axios.get(`/projects/${id}`);

export const editProject = (id, values) => Axios.put(`/projects/${id}`, values);
