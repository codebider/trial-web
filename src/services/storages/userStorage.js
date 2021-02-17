import createStorage from './createStorage';

const instance = createStorage('user');
const KEY_TOKEN = 'token';

export const setToken = (data) => instance.setValue(KEY_TOKEN, data);

export const getToken = () => instance.getValue(KEY_TOKEN);

export const clearToken = () => instance.clear();
