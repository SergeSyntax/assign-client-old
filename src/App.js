import React from 'react';
import history from './history';
import { Router, Switch, Route } from 'react-router-dom';
import Landing from 'pages/Landing';
import Register from 'pages/Register/Register';
import ContactUs from 'pages/ContactUs';
import Terms from 'pages/Terms';
import PrivacyPolicy from 'pages/PrivacyPolicy';
import Login from 'pages/Login/Login';
import PasswordRecovery from 'pages/PasswordRecovery/PasswordRecovery';
import ServerError from 'components/shared/ServerError/ServerError';
import { useSelector } from 'react-redux';
import Loading from 'pages/Loading/Loading';

function App() {
  const state = useSelector(state => state.users);
  console.log(state.loading);

  return (
    <Router history={history}>
      {state.loading && false ? (
        <Loading />
      ) : state.authenticated || true ? (
        <div>test</div>
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

      <ServerError />
    </Router>
  );
}

export default App;
