import userActionTypes from '../actionTypes/userActionTypes';

// const user = JSON.parse(storageService.get(storageService.keys.user));
const initialState = {
  loading: false,
  loggedIn: false,
  user: {},
  error: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case userActionTypes.LOGIN_REQUEST:
      return {
        loggedIn: false,
        loading: true,
        error: null,
        user: {},
      };
    case userActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        loading: false,
        error: null,
        user: action.payload,
      };
    case userActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        loggedIn: false,
        user: {},
        error: action.payload,
      };
    case userActionTypes.LOGOUT:
      return {
        loggedIn: false,
        loading: false,
        user: {},
        error: null,
      };
    default:
      return state;
  }
}
