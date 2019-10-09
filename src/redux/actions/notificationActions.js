import notificationActionTypes from '../actionTypes/notificationActionTypes';
import { showNotification } from '../../services/generalhelper';

const showSuccessAlert = (title, message) => ({ type: notificationActionTypes.SUCCESS, payload: { title, message} });
const showWarningAlert = (title, message) => ({ type: notificationActionTypes.WARNING, payload: { title, message} });
const showErrorAlert = (title, message) => ({ type: notificationActionTypes.ERROR, payload: { title, message} });

const clear = () => ({ type: notificationActionTypes.CLEAR });

const success = (title, message) => async (dispatch) => {
  await dispatch(showSuccessAlert(title, message));
  showNotification();
  await dispatch(clear());
};

const warning = (title, message) => async (dispatch) => {
  await dispatch(showWarningAlert(title, message));
  showNotification();
  await dispatch(clear());
};

const error = (title, message) => async (dispatch) => {
  await dispatch(showErrorAlert(title, message));
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
