export const goTo = (url, params = {}) => {
  let value = url;
  Object.keys(params).forEach((key) => {
    value = value.replace(`:${key}`, params[key]);
  });

  return value;
};
