import authActionTypes from './actionTypes';
import apiService from '../../../services/apiService';
import { historyRoutes} from '../../../routes';
import history from '../../../services/history';
//import companyActionTypes from '../actionTypes/companyActionsTypes';
import notificationActions from '../../../redux/actions/notificationActions';

const login = (credentials) => {
  function request(params) {
    return { type: authActionTypes.LOGIN_REQUEST, payload: params };
  }

  function success(user) {
    return { type: authActionTypes.LOGIN_SUCCESS, payload: user };
  }

  function failure(error) {
    return { type: authActionTypes.LOGIN_FAILURE, payload: error };
  }

  return async (dispatch) => {
    const { username, password } = credentials;
    // dispatch({ type: companyActionTypes.CLEAR });
    await dispatch(request({ username, password }));
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
          dispatch(notificationActions.error(error.response.statusText, error.response.data.message));
          dispatch(failure(error.response));
        } catch (e) {
          dispatch(notificationActions.error('Unexpected Error!', 'Please contact server administration.'));
          dispatch(failure(error));
        }
      });
  };
};

const logout = () => (dispatch) => {
  apiService.logout(dispatch);
};

const authActions = {
  login,
  logout,
};

export default authActions;
