import {
  closeNotifications,
  showNotification,
} from '../../services/generalhelper';

const closeAll = () => async () => {
  await closeNotifications();
};

const success = (title, message, duration = 5) => () => {
  showNotification('warning', title, message, duration);
};

const warning = (title, message, duration = 5) => () => {
  showNotification('warning', title, message, duration);
};

const error = (title, message, duration = 5) => () => {
  showNotification('warning', title, message, duration);
};

const notificationActions = {
  success,
  warning,
  error,
  closeAll,
};

export default notificationActions;
