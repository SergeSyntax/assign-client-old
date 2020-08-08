import Axios from 'axios';
import { baseURL} from 'config/server';

/**
 * create axios instance with the application default config settings
 * @returns axios instance
 * @function
 */
export default Axios.create({ withCredentials: true, baseURL });
