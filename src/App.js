import React, { useEffect } from 'react';
import history from './history';
import { Router, Switch, Route } from 'react-router-dom';
import Landing from 'pages/Landing';
import ContactUs from 'pages/unplugged/ContactUs';
import Terms from 'pages/unplugged/Terms';
import PrivacyPolicy from 'pages/unplugged/PrivacyPolicy';
import Login from 'pages/Auth/Login';
import PasswordRecovery from 'pages/Auth/PasswordRecovery/PasswordRecovery';
import ServerAlert from 'components/shared/ServerAlert';
import { useSelector, useDispatch } from 'react-redux';
import Loading from 'pages/Loading/Loading';
import Dashboard from 'pages/Dashboard/Dashboard';
import { fetchUser } from 'actions/users';
import { Fragment } from 'react';
import Project from 'pages/Board/Project';
import Register from 'pages/Auth/Register';

function App() {
  const { loading, authenticated } = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <Router history={history}>
      {loading ? (
        <Loading />
      ) : (
        <Fragment>
          {authenticated ? (
            <Switch>
              <Route path="/project/:id" component={Project} />
              <Route path="/" component={Dashboard} />
            </Switch>
          ) : (
            <Switch>
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/password-recovery" component={PasswordRecovery} />
              <Route path="/contact-us" component={ContactUs} />
              <Route path="/terms" component={Terms} />
              <Route path="/privacy-policy" component={PrivacyPolicy} />
              <Route path="/" component={Landing} />
            </Switch>
          )}
        </Fragment>
      )}

      <ServerAlert />
    </Router>
  );
}

export default App;
