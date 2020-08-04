import _ from 'lodash';

/**
 * @param {import('@hapi/joi').Schema}schema Joi validation schema
 *
 * @return {object} object with filed keys and error values
 */
export default schema => values => {
  const { error } = schema.validate(values, { abortEarly: false });
  if (error) {
    return error.details.reduce((result, item) => {
      result[item.path[0]] = _.capitalize(item.message.replace(/"/g, ''));
      return result;
    }, {});
  }

  return {};
};
