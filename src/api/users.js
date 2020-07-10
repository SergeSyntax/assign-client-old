import Axios from 'axios';

export const createUser = user => Axios.post('/users', user);
export const useLogin = user => Axios.post('/users/login/', user);
export const fetchUser = () => Axios.get('/users/me');
