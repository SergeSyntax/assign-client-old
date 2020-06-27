import axios from 'axios';

export const createUser = user => axios.post('/users', user);
export const useLogin = user =>
  axios.post('/users/login/', user, { headers: { 'Content-Type': 'application/json' } });
