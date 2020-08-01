/**
 * get order object and convert it into a string to setup the order in the request's query
 * @param {Array.<object>} order
 */
const generateOrderString = order =>
  order.reduce((prev, { col, direction }, i) => {
    return prev + `&order[${i}][col]=${col}&order[${i}][direction]=${direction}`;
  }, '');

/**
 * get paginationSettings object and return a string for the request's query for pagination and order purpose
 * @param {object} paginationSettings
 * @returns {string} query for the server to setup pagination and order
 * @function
 */
const queryHandler = (
  paginationSettings = { page: 0, limit: 0, order: [{ col: 'createdAt', direction: 'DESC' }] }
) =>
  `?page=${paginationSettings.page}&limit=${paginationSettings.limit}${generateOrderString(
    paginationSettings.order
  )}`;

export default queryHandler;
