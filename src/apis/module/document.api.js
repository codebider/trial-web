import baseApi from '../base.api';
import { paths } from '../paths';

export const listDocuments = () => {
  return baseApi.get(paths.listDocuments());
};
