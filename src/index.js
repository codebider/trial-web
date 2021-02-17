import 'core-js';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from 'styled-components';
import { BaseCSS, GridThemeProvider } from 'styled-bootstrap-grid';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import baseApi from './api/base.api';
import { styledTheme } from './theme/theme';
import { Routes } from './routes/routes';
import { clearToken, getToken } from './services/storages/userStorage';

const history = createBrowserHistory();

baseApi.setToken(getToken());
baseApi.setClearCallback(clearToken);

ReactDOM.render(
  <ThemeProvider theme={styledTheme}>
    <GridThemeProvider>
      <Router history={history}>
        <BaseCSS />
        <Routes />
      </Router>
    </GridThemeProvider>
  </ThemeProvider>,
  document.querySelector('#root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
