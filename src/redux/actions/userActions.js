import userActionTypes from '../actionTypes/userActionTypes';
import apiService from '../../services/apiService';
import { historyRoutes } from '../../routes';
import history from '../../services/history';
import companyActionTypes from '../actionTypes/companyActionsTypes';
import alertActions from './alertActions';

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
    dispatch({ type: companyActionTypes.CLEAR });
    dispatch(request({ username }));
    await apiService.login(credentials)
      .then((res) => {
        if (res.data.token) {
          history.push(historyRoutes.dashboard);
          dispatch(success(res.data));
        }
      })
      .catch((error) => {
        try {
          dispatch(alertActions.error(error.response.statusText));
          dispatch(failure(error));
        } catch (e) {
          dispatch(alertActions.error('Unexpected Error'));
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
