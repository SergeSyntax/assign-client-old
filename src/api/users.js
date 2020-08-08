import request from '../utils/request';

export const createUser = user => request.post('/users', user);
export const useLogin = user => request.post('/users/login/', user);
export const fetchUser = () => request.get('/users/me', { withCredentials: true });
