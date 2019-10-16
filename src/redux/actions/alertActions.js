import { showAlert } from '../../services/generalhelper';

const success = (message) => () => {
  showAlert('error', message);
};

const error = (message, duration = 5) => () => {
  showAlert('error', message, duration);
};

const warning = (message, duration = 5) => () => {
  showAlert('warning', message, duration);
};

const alertActions = {
  success,
  error,
  warning,
};

export default alertActions;
