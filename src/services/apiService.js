/* eslint-disable no-undef,max-len,no-unused-vars */
import axios from 'axios';
import { apiUrl } from '../constants/config';
import storageService from './storageService';
import history from '../constants/history';
import historyRoutes from '../routes/historyRoutes';
import { store } from '../redux/store';
import authActionTypes
  from '../containers/AuthenticationBundle/redux/actionTypes';

/**
 * * [routes for apis]
 */
const routes = {
  authLogin: '/login_check',
};

/**
 * Create Axios Instance
 * @type {AxiosInstance}
 */
const axiosinstance = axios.create({
  timeout: 10000,
  params: {}, // do not remove this, its added to add params later in the config
});

/**
 * Provides Http Headers
 * @returns {{Authorization: string, 'Content-Type': string}|{}}
 */
function authHeaderProvider() {
  // * return authorization header with jwt token
  try {
    // const user = JSON.parse(storageService.get(storageService.keys.user));

    // * get company id from redux store
    const { authReducer: { token } } = store.getState();
    /*const { companyReducer } = store.getState();*/
    /*const companyID = companyReducer.company.id;*/

    if (token) {
      return {
        Authorization: `Bearer ${token}`,
        /*'company-id': companyID,*/
      };
    }
    return {};
  } catch (e) {
    return {};
  }
}

/**
 * * [Logout and Go To Login Page]
 * ! clear all items form local storage
 */
function logout() {
  // remove user from local storage to log user out
  // storageService.remove(storageService.keys.user);
  // remove company id from local storage
  // storageService.remove(storageService.keys.companyID);
  try {
    store.dispatch({ type: authActionTypes.LOGOUT });
    // dispatch({ type: companyActionTypes.CLEAR });
    const { authReducer: { token } } = store.getState();
    if (token) {
      store.dispatch({ type: 'RESET_APP' });
      storageService.clear();
    }
    history.push(historyRoutes.login);
  } catch (e) {
    /* */
  }
}

/**
 * * [Handle http response error]
 * ! needs dispatch for Redux
 * ! Logout if, 401: Expired JW-Token
 * @param error
 */
function handleError(error) {
  try {
    if ((error.response && error.response.data && error.response.data.code === 401) || error.code === '401' || error.code === 401 || (error.response && error.response.status === 401)) {
      logout();
    }
  } catch (err) {
    // console.error(err);
  }
}

/**
 * Add a request interceptor
 */
axiosinstance.interceptors.request.use(
  (config) => {
    const cfg = config;
    const header = authHeaderProvider();
    if (header && header.Authorization) {
      cfg.headers.Authorization = header.Authorization;
    }
    cfg.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    // Promise.reject(error);
    throw error;
  },
);

export const get = async (url) => {
  try {
    return await axiosinstance
      .get(url);
  } catch (error) {
    handleError(error);
    throw error.response;
  }
};

export const post = async (url, data) => {
  try {
    return await axiosinstance
      .post(url, JSON.stringify(data));
  } catch (error) {
    handleError(error);
    throw error.response;
  }
};

export const patch = async (url, data) => {
  try {
    return await axiosinstance
      .patch(url, JSON.stringify(data));
  } catch (error) {
    handleError(error);
    throw error.response;
  }
};

export const remove = async (url) => {
  try {
    return await axiosinstance
      .delete(url);
  } catch (error) {
    handleError(error);
    throw error.response;
  }
};

const request = async (options) => {
  switch (options.method) {
    case 'POST':
      try {
        return await axiosinstance
          .post(options.url, JSON.stringify(options.data));
      } catch (error) {
        handleError(error);
        throw error.response;
      }
    case 'GET':
      try {
        return await axiosinstance
          .get(options.url);
      } catch (error) {
        handleError(error);
        throw error.response;
      }
    case 'PATCH':
      try {
        return await axiosinstance
          .patch(options.url, JSON.stringify(options.data));
      } catch (error) {
        handleError(error);
        throw error.response;
      }
    case 'DELETE':
      try {
        return await axiosinstance
          .delete(options.url);
      } catch (error) {
        handleError(error);
        throw error.response;
      }
    default:
      return null;
  }
};

/**
 * * [Login request for User]
 * @returns {Promise<any>}
 * @param params
 */
function login(params) {
  return request({
    url: `${apiUrl}auth/login`,
    method: 'POST',
    data: params,
  });
}


const apiService = {
  routes,
  login,
  logout,
  request,
  get,
  post,
  patch,
  remove,
};

export default apiService;
