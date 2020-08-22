import Axios from 'axios';

export const serverUrl = process.env.REACT_APP_BASEURL || 'http://localhost:5000';
export const baseURL = `${serverUrl}/api/v1`;


/**
 * create axios instance with the application axios default requests configurations
 * @returns axios instance
 * @function
 */
export default Axios.create({ withCredentials: true, baseURL });


