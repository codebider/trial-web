import baseApi from '../base.api';
import { paths } from '../paths';

export const login = (username, password) => {
  return baseApi.post(paths.login(), {
    username,
    password,
  });
};

export const register = ({ username, password, fullName }) => {
  return baseApi.post(paths.register(), { username, password, fullName });
};
