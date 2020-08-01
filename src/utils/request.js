const Axios = require('axios');

/**
 * create axios instance with the application default config settings
 * @returns axios instance
 * @function
 */
export default Axios.create({ withCredentials: true, baseURL: process.env.REACT_APP_BASEURL });
