import Axios from 'axios';

export const serverUrl = 'https://assign-management.herokuapp.com';
export const baseURL = `${serverUrl}/api/v1`;

/**
 * create axios instance with the application axios default requests configurations
 * @returns axios instance
 * @function
 */
export default Axios.create({ withCredentials: true, baseURL });
