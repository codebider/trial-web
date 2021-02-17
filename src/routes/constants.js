import HomeScreen from '../pages/home/home';
import LoginScreen from '../pages/login/login';

export const Pages = {
  home: '/',
  login: '/login',
};

const Routes = [
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

export default Routes;
