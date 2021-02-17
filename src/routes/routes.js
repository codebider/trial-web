import { Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';

import PrivateRoute from './PrivateRoute';
import { Pages } from './constants';
import HomeScreen from '../pages/home/home';
import LoginScreen from '../pages/login/login';

const ListRoutes = [
  {
    path: Pages.home,
    component: HomeScreen,
    isPrivate: true,
  },
  {
    path: Pages.login,
    component: LoginScreen,
  },
];

export const Routes = () => (
  <Switch>
    {ListRoutes.map((page) => {
      const RouteComp = page.isPrivate ? PrivateRoute : Route;
      return <RouteComp key={page.path} path={page.path} component={page.component} exact />;
    })}
    <Redirect from="*" to={Pages.home} />
  </Switch>
);
