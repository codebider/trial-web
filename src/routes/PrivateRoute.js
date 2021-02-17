import React from 'react';
import propTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import { getToken } from '../services/storages/userStorage';
import { Pages } from './constants';

const PrivateRoute = ({ component, path, exact }) => {
  const condition = getToken();

  return condition ? (
    <Route path={path} exact={exact} component={component} />
  ) : (
    <Redirect to={Pages.login} />
  );
};

PrivateRoute.propTypes = {
  component: propTypes.func,
  path: propTypes.string,
  exact: propTypes.bool,
};

export default PrivateRoute;
