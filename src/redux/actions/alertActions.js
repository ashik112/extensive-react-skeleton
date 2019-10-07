import alertActionTypes from '../actionTypes/alertActionTypes';
import { showAlert } from '../../services/generalhelper';

const showSuccessAlert = (message) => ({ type: alertActionTypes.SUCCESS, payload: message });

const showErrorAlert = (message) => ({ type: alertActionTypes.ERROR, payload: message });

const clear = () => ({ type: alertActionTypes.CLEAR });

const success = (message) => async (dispatch) => {
  await dispatch(showSuccessAlert(message));
  showAlert();
  await dispatch(clear());
};

const error = (message) => async (dispatch) => {
  await dispatch(showErrorAlert(message));
  showAlert();
  await dispatch(clear());
};

const alertActions = {
  success,
  error,
  clear,
};

export default alertActions;
