/* eslint-disable no-undef */

/**
 * * [storage keys]
 */
const keys = {
  currentUser: 'currentUser',
  user: 'user',
  companyID: 'companyID',
  serverURL: 'serverURL',
};

/**
 * * [Save Data in Storage]
 * @param {*} key
 * @param {*} value
 */
function set(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/**
 * * [Get Value from Storage using a key]
 * @param  {} key
 */
function get(key) {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    return '';
  }
}

/**
 * * [Remove specific data from local storage]
 * @param key
 */
function remove(key) {
  localStorage.removeItem(key);
}

/**
 * * [Clears all data from local storage]
 * ! Be Careful while using!
 */
function clear() {
  localStorage.clear();
}


const storageService = {
  get,
  set,
  remove,
  clear,
  keys,
};

export default storageService;
