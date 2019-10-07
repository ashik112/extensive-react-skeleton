import userActionTypes from '../actionTypes/userActionTypes';
import apiService from '../../services/apiService';
import { historyRoutes } from '../../routes';
import history from '../../services/history';
//import companyActionTypes from '../actionTypes/companyActionsTypes';
import notificationActions from './notificationActions';

const login = (credentials) => {
  function request(user) {
    return { type: userActionTypes.LOGIN_REQUEST, user };
  }

  function success(user) {
    return { type: userActionTypes.LOGIN_SUCCESS, user };
  }

  function failure(error) {
    return { type: userActionTypes.LOGIN_FAILURE, error };
  }

  return async (dispatch) => {
    const { username } = credentials;
    // dispatch({ type: companyActionTypes.CLEAR });
    await dispatch(request({ username }));
    // ! Show Loading on Log In button for 1 sec
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await apiService.login(credentials)
      .then((res) => {
        if (res.data.token) {
          history.push(historyRoutes.dashboard);
          dispatch(success(res.data));
        }
      })
      .catch((error) => {
        try {
          dispatch(notificationActions.error(error.response.message));
          dispatch(failure(error));
        } catch (e) {
          dispatch(notificationActions.error('Unexpected Error. Please contact administration.'));
          dispatch(failure(error));
        }
      });
  };
};

const logout = () => (dispatch) => {
  apiService.logout(dispatch);
};

const userActions = {
  login,
  logout,
};

export default userActions;
