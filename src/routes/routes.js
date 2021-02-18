import { Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';

import PrivateRoute from './PrivateRoute';
import { Pages } from './constants';
import HomeScreen from '../pages/home/home';
import LoginScreen from '../pages/login/login';
import RegisterScreen from '../pages/register/register';
import DocumentDetailScreen from '../pages/document-detail/documentDetail';
import DocumentEditScreen from '../pages/document-edit/documentEdit';
import DocumentCreateScreen from '../pages/document-create/documentCreate';

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
  {
    path: Pages.register,
    component: RegisterScreen,
  },
  {
    path: Pages.documentCreate,
    component: DocumentCreateScreen,
    isPrivate: true,
  },
  {
    path: Pages.documentDetail,
    component: DocumentDetailScreen,
    isPrivate: true,
  },
  {
    path: Pages.documentEdit,
    component: DocumentEditScreen,
    isPrivate: true,
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
