import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import MaterialLink from '@material-ui/core/Link';
import PropTypes from 'prop-types';

const Link = ({ text, to }) => {
  return (
    <MaterialLink className="link" component={RouterLink} to={to}>
      {text}
    </MaterialLink>
  );
};

Link.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default Link;
