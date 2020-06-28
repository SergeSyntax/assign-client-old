import Axios from 'axios';
import Cookies from 'js-cookie';

export const request = Axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const authRequest = Axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${Cookies.get('assign-auth-token')}`,
  },
});
