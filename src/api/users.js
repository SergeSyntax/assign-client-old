import server from 'config/server';

export const createUser = user => server.post('/users', user);
export const useLogin = user => server.post('/users/login/', user);
export const fetchUser = () => server.get('/users/me', { withCredentials: true });
