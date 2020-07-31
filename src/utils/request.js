const { default: Axios } = require('axios');

export default Axios.create({ withCredentials: true, baseURL: process.env.REACT_APP_BASEURL });
