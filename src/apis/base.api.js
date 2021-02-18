import axios from 'axios';
import get from 'lodash/get';

const UPLOAD_HEADER = {
  accept: 'application/json',
  'Accept-Language': 'en-US,en;q=0.8',
  'Content-Type': 'application/binary',
};

class BaseApi {
  constructor(opts = {}) {
    Object.assign(this, opts);

    const baseURL = 'http://localhost:5000/v1';

    this.client = axios.create({
      timeout: 120000,
    });

    if (baseURL) {
      this.client.defaults.baseURL = baseURL;
    }

    this.client.interceptors.response.use(
      function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response.data;
      },
      (error) => {
        const data = get(error, 'response.data', {});
        const status = get(error, ['status']) || get(error, ['response', 'status']);
        if (status === 401) {
          this.clearSession();
          window.location.href = '/login';
        }
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(data);
      },
    );
  }

  static getInstance() {
    return new BaseApi();
  }

  static buildOptions(method, url, params = {}, headers = {}) {
    return {
      method,
      url,
      params,
      headers,
    };
  }

  setBaseURL(baseURL) {
    this.client.defaults.baseURL = baseURL;
  }

  setClearCallback(clearStore) {
    this.clearStore = clearStore;
  }

  clearSession() {
    if (this.clearStore) {
      this.clearStore();
    }
  }

  setDefaultHeader(key, value) {
    this.client.defaults.headers[key] = value;
  }

  setToken(token) {
    this.setDefaultHeader('Authorization', `Bearer ${token}`);
  }

  setDefaultHeaders(headers) {
    this.client.defaults.headers = {
      ...this.client.defaults.headers,
      ...headers,
    };
  }

  async request(opts) {
    const requestOpts = BaseApi.preRequest(opts);

    return this.client(requestOpts);
  }

  async delete(uri, params, headers) {
    const opts = BaseApi.buildOptions('delete', uri, params, headers);

    return this.request(opts);
  }

  async get(uri, params, headers) {
    const opts = BaseApi.buildOptions('get', uri, params, headers);
    return this.request(opts);
  }

  async post(uri, payload, params, headers) {
    const opts = BaseApi.buildOptions('post', uri, params, headers);

    opts.data = payload;

    return this.request(opts);
  }

  async put(uri, payload, params, headers) {
    const opts = BaseApi.buildOptions('put', uri, params, headers);

    opts.data = payload;

    return this.request(opts);
  }

  async upload(uri, file) {
    return this.client.post(uri, file, { headers: UPLOAD_HEADER });
  }

  static preRequest(opts) {
    return {
      ...opts,
    };
  }
}

export default BaseApi.getInstance();
