import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = ({ component: Component, ...rest }) => {
  const authenticated = useSelector(state => state.users.authenticated);

  return (
    <Route
      {...rest}
      render={routeProps =>
        authenticated ? <Redirect to="/dashboard" /> : <Component {...routeProps} />
      }
    />
  );
};

PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
};

export default PublicRoute;
