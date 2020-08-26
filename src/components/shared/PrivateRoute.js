import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authenticated = useSelector(state => state.users.authenticated);

  return (
    <Route
      {...rest}
      render={routeProps =>
        authenticated ? (
          <Component {...routeProps} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: routeProps.location },
            }}
          />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
};

export default PrivateRoute;
