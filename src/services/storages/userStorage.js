import createStorage from './createStorage';

const instance = createStorage('user');
const KEY_TOKEN = 'token';
const KEY_USER = 'user';

export const setUser = (data) => instance.setValue(KEY_USER, data);

export const getUser = () => instance.getValue(KEY_USER);

export const setToken = (data) => instance.setValue(KEY_TOKEN, data);

export const getToken = () => instance.getValue(KEY_TOKEN);

export const clearToken = () => instance.clear();
