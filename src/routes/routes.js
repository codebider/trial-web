import { Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';

import PrivateRoute from './PrivateRoute';
import ListRoutes, { Pages } from './constants';

export const Routes = () => (
  <Switch>
    {ListRoutes.map((page) => {
      const RouteComp = page.isPrivate ? PrivateRoute : Route;
      return <RouteComp key={page.path} path={page.path} component={page.component} exact />;
    })}
    <Redirect from="*" to={Pages.home} />
  </Switch>
);
