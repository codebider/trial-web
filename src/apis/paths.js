export const paths = {
  login() {
    return '/login';
  },
  register() {
    return '/register';
  },
  listDocuments() {
    return '/documents';
  },
  createDocuments() {
    return '/documents';
  },
  getDocumentDetail(id) {
    return `/documents/${id}`;
  },
  deleteDocument(id) {
    return `/documents/${id}`;
  },
  updateDocument(id) {
    return `/documents/${id}`;
  },
  getOneDocument(identityNumber) {
    return `/documents/one?identityNumber=${identityNumber}`;
  },
};
