import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import store from 'config/store';
import theme from './styles/theme';
import CssBaseline from '@material-ui/core/CssBaseline';

import 'typeface-roboto';
import './styles/index.scss';

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>,
  // </React.StrictMode>
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
