import React from 'react';
import history from '../utils/history';
import { Router, Switch, Route } from 'react-router-dom';
import Landing from 'pages/Landing';
import ContactUs from 'pages/unplugged/ContactUs';
import Terms from 'pages/unplugged/Terms';
import PrivacyPolicy from 'pages/unplugged/PrivacyPolicy';
import Login from 'pages/Auth/Login';
import PasswordRecovery from 'pages/Auth/PasswordRecovery/PasswordRecovery';
import Project from 'pages/Board/Project';
import Register from 'pages/Auth/Register';
import Dashboard from 'pages/Dashboard/Dashboard';
import PublicRoute from 'components/shared/PublicRoute';
import PrivateRoute from 'components/shared/PrivateRoute';

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <PublicRoute exact path="/" component={Landing} />
        <PublicRoute path="/register" component={Register} />
        <PublicRoute path="/login" component={Login} />
        <PublicRoute path="/password-recovery" component={PasswordRecovery} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/project/:id" component={Project} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/terms" component={Terms} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
      </Switch>
    </Router>
  );
};

Routes.propTypes = {};

export default Routes;
