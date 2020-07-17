const generateOrderString = order =>
  order.reduce((prev, { col, direction }, i) => {
    return prev + `&order[${i}][col]=${col}&order[${i}][direction]=${direction}`;
  }, '');

const queryHandler = (
  paginationSettings = { page: 0, limit: 0, order: [{ col: 'createdAt', direction: 'DESC' }] }
) =>
  `?page=${paginationSettings.page}&limit=${paginationSettings.limit}${generateOrderString(
    paginationSettings.order
  )}`;

export default queryHandler;
