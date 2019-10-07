/* eslint-disable no-undef,max-len */
import axios from 'axios';
import { serverURL } from '../constants';
import storageService from './storageService';
import history from './history';
import { historyRoutes } from '../routes';
import userActionTypes from '../redux/actionTypes/userActionTypes';
import companyActionTypes from '../redux/actionTypes/companyActionsTypes';
import { store } from '../redux/store';

export const apiPrefix = '/api/v1';

/**
 * * [routes for apis]
 */
export const routes = {
  login: 'signin',
  purchase: 'purchase',
  lc: 'lc',
  authLogin: 'auth/login',
  farm: 'farm',
  flock: 'farm/flock',
  flockList: 'farm/flock_list',
};

export const getToken = () => {
  try {
    return JSON.parse(localStorage.getItem('token'));
  } catch (err) {
    // console.log(err);
  }
  return {};
};

function authHeaderProvider() {
  // * return authorization header with jwt token
  try {
    // const user = JSON.parse(storageService.get(storageService.keys.user));

    // * get company id from redux store
    const { companyReducer, userReducer: { user } } = store.getState();
    const companyID = companyReducer.company.id;

    if (user && user.token) {
      return {
        'JW-TOKEN': `Bearer ${user.token}`,
        'company-id': companyID,
        'Content-Type': 'application/json',
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
function logout(dispatch) {
  // remove user from local storage to log user out
  // storageService.remove(storageService.keys.user);
  // remove company id from local storage
  // storageService.remove(storageService.keys.companyID);
  try {
    dispatch({ type: userActionTypes.LOGOUT });
    dispatch({ type: companyActionTypes.CLEAR });
    dispatch({ type: 'RESET_APP' });
    storageService.clear();
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
 * @param dispatch
 */
function handleError(error, dispatch) {
  try {
    if ((error.response && error.response.data && error.response.data.code === 401) || error.code === '401' || error.code === 401) {
      dispatch(logout(dispatch));
    }
  } catch (err) {
    // console.error(err);
  }
}

/**
 * * [Get Request]
 * ! needs dispatch for Redux
 * @param url
 * @param dispatch
 * @returns {Promise<any>}
 */
async function get(url, dispatch) {
  const headers = await authHeaderProvider();
  return new Promise(((resolve, reject) => {
    axios.get(`${url}`, { headers }).then((response) => {
      resolve(response);
    }).catch((error) => {
      handleError(error, dispatch);
      reject(error);
    });
  }));
}

/**
 * * [Post Request]
 * @param url
 * @param param
 * @param dispatch
 * @returns {Promise<any>}
 */
async function post(url, param, dispatch) {
  const headers = await authHeaderProvider();
  return new Promise(((resolve, reject) => {
    axios.post(`${url}`, param, { headers }).then((response) => {
      resolve(response);
    }).catch((error) => {
      handleError(error, dispatch);
      reject(error);
    });
  }));
}

/**
 * * [Patch Request]
 * @param url
 * @param param
 * @param dispatch
 * @returns {Promise<any>}
 */
// eslint-disable-next-line no-unused-vars
function patch(url, param, dispatch) {
  return new Promise(((resolve, reject) => {
    axios.patch(`${url}`, param, authHeaderProvider()).then((response) => {
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
  }));
}

/**
 * * [Delete Request]
 * @param url
 * @returns {Promise<any>}
 */
function remove(url) {
  return new Promise(((resolve, reject) => {
    axios.delete(`${url}`, authHeaderProvider()).then((response) => {
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
  }));
}

/**
 * * [Login request for User]
 * @returns {Promise<any>}
 * @param params
 */
function login(params) {
  return axios.post(`${serverURL}${routes.authLogin}`,
    { _username: params.username, _password: params.password });
}

const getPurchase = (id, dispatch) => get(`${serverURL}${routes.purchase}/${id}`, dispatch);

const getLc = (id, dispatch) => get(`${serverURL}${routes.lc}/commercial-invoice-products/${id}`, dispatch);

/** Flock::begin * */
const getFlock = (id, dispatch) => get(`${serverURL}${routes.flock}/${id}`, dispatch);
const getFlockList = (dispatch) => get(`${serverURL}${routes.flockList}`, dispatch);
const deleteFlock = (id) => remove(`${serverURL}${routes.flock}/${id}`);
const createFlock = (params, dispatch) => post(`${serverURL}${routes.flock}`, params, dispatch);
const updateFlock = (params, dispatch) => patch(`${serverURL}${routes.flock}`, params, dispatch);
/** Flock::end * */


const apiService = {
  routes,
  getPurchase,
  getLc,
  updateFlock,
  createFlock,
  deleteFlock,
  getFlock,
  getFlockList,
  login,
  logout,
};

export default apiService;