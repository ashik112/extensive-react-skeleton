import userActionTypes from '../actionTypes/userActionTypes';

// const user = JSON.parse(storageService.get(storageService.keys.user));
const initialState = {
  loading: false,
  loggedIn: false,
  user: {},
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case userActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        loading: false,
        user: action.payload,
      };
    case userActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case userActionTypes.LOGOUT:
      return {
        loggedIn: false,
        loading: false,
        user: {},
      };
    default:
      return state;
  }
}
