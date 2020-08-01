import moment from 'moment';

const LOCAL_DATE_FORMAT = 'YYYY-MM-DDThh:mm';

/**
 * get date and change it format to work with Material-UI
 * @param {*} date
 * @returns date in the format: 'YYYY-MM-DDThh:mm'
 */
const formatDate = date => moment(date).format(LOCAL_DATE_FORMAT);

export default formatDate;
