import baseApi from '../base.api';
import { paths } from '../paths';

export const listDocuments = () => {
  return baseApi.get(paths.listDocuments());
};

export const getDocumentDetail = (id) => {
  return baseApi.get(paths.getDocumentDetail(id));
};

export const createDocuments = (params) => {
  return baseApi.post(paths.createDocuments(), params);
};

export const updateDocuments = (id, params) => {
  return baseApi.put(paths.updateDocument(id), params);
};

export const deleteDocuments = (id) => {
  return baseApi.delete(paths.deleteDocument(id));
};

export const getOneDocument = (identityNumber) => {
  return baseApi.delete(paths.getOneDocument(identityNumber));
};
