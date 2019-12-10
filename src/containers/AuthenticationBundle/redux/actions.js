import authActionTypes from './actionTypes';
import apiService from '../../../services/apiService';
import historyRoutes from '../../../routes/historyRoutes';
import history from '../../../constants/history';
// eslint-disable-next-line no-unused-vars
import checkHttpError from '../../../services/checkHttpError';

const login = (credentials) => {
  function request(params) {
    return { type: authActionTypes.LOGIN_REQUEST, payload: params };
  }

  function success(user) {
    return { type: authActionTypes.LOGIN_SUCCESS, payload: user };
  }

  // eslint-disable-next-line no-unused-vars
  function failure(error) {
    return { type: authActionTypes.LOGIN_FAILURE, payload: error };
  }

  return async (dispatch) => {
    const { username, password } = credentials;
    // dispatch({ type: companyActionTypes.CLEAR });
    await dispatch(request({ username, password }));
    // ! Show Loading on Log In button for 1 sec
    await new Promise((resolve) => setTimeout(resolve, 1000));
    history.push(historyRoutes.dashboard);
    dispatch(success({
      token: '3587gfbhduopr327gfb3mr0wq7tgm3b09ufgre',
    }));

    // * get authorized via api
    /*await apiService.login({
      _username: username,
      _password: password,
    })
      .then((res) => {
        if (res.data.token) {
          history.push(historyRoutes.dashboard);
          dispatch(success(res.data));
        }
      })
      .catch((error) => {
        dispatch(failure(error));
        checkHttpError(error, 2, 5);
      });*/
  };
};

const stopLoading = () => (dispatch) => {
  dispatch({ type: authActionTypes.LOGIN_LOADING_STOP });
};

const logout = () => (dispatch) => {
  apiService.logout(dispatch);
};

const authActions = {
  login,
  logout,
  stopLoading,
};

export default authActions;
