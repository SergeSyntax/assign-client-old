import axios from 'axios';

export const createUser = user => axios.post('/users', user);
