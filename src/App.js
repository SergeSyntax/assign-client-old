import React from 'react';
import history from './history';
import { Router, Switch, Route } from 'react-router-dom';
import Landing from 'pages/Landing';
import Register from 'pages/Register/Register';
import ContactUs from 'pages/ContactUs';
import Terms from 'pages/Terms';
import PrivacyPolicy from 'pages/PrivacyPolicy';
import Login from 'pages/Login/Login';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/terms" component={Terms} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/" component={Landing} />
      </Switch>
    </Router>
  );
}

export default App;
