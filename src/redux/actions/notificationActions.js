import notificationActionTypes from '../actionTypes/notificationActionTypes';
import { showNotification } from '../../services/generalhelper';

const showSuccessAlert = (message) => ({ type: notificationActionTypes.SUCCESS, payload: message });
const showWarningAlert = (message) => ({ type: notificationActionTypes.WARNING, payload: message });

const showErrorAlert = (message) => ({ type: notificationActionTypes.ERROR, payload: message });

const clear = () => ({ type: notificationActionTypes.CLEAR });

const success = (message) => async (dispatch) => {
  await dispatch(showSuccessAlert(message));
  showNotification();
  await dispatch(clear());
};

const warning = (message) => async (dispatch) => {
  await dispatch(showWarningAlert(message));
  showNotification();
  await dispatch(clear());
};

const error = (message) => async (dispatch) => {
  await dispatch(showErrorAlert(message));
  showNotification();
  await dispatch(clear());
};

const notificationActions = {
  success,
  warning,
  error,
  clear,
};

export default notificationActions;
