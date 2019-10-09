import authActionTypes from './actionTypes';

const initialState = {
  loading: false,
  loggedIn: false,
  user: {},
  error: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case authActionTypes.LOGIN_REQUEST:
      return {
        loggedIn: false,
        loading: true,
        error: null,
        user: {},
      };
    case authActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        loading: false,
        error: null,
        user: action.payload,
      };
    case authActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        loggedIn: false,
        user: {},
        error: action.payload,
      };
    case authActionTypes.LOGOUT:
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
