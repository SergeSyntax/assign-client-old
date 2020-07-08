import { authRequest, request } from 'utils/request';

export const createUser = user => request.post('/users', user);
export const useLogin = user => request.post('/users/login/', user);
export const fetchUser = () => authRequest.get('/users/me');
