import alertActions from '../redux/actions/alertActions';
import notificationActions from '../redux/actions/notificationActions';
import { store } from '../redux/store';

/**
 * 1 for alert, 2 for notification
 * @param error
 * @param alertType
 * @param duration
 * ! Requires antd for alert & notification
 */
export default function checkHttpError(error, alertType, duration = 5) {
  const { dispatch } = store;
  switch (alertType) {
    case 1:
      try {
        if (error.data.errors.children) {
          // eslint-disable-next-line no-restricted-syntax,no-unused-vars
          for (const [key, value] of Object.entries(error.data.errors.children)) {
            value.errors.forEach(async (err) => {
              await dispatch(alertActions.warning(err, duration));
            });
          }
          break;
        }
      } catch (e) {
        // console.log(e);
      }
      try {
        if (error && error.statusText) {
          dispatch(alertActions.error(error.statusText, duration));
        } else if (error.message) {
          dispatch(alertActions.error(error.message, duration));
        } else {
          dispatch(alertActions.error('Unexpected Error', duration));
        }
      } catch (e) {
        dispatch(alertActions.error('Unexpected Error', duration));
      }
      break;
    case 2:
      try {
        if (error.data.errors.children) {
          // eslint-disable-next-line no-restricted-syntax,no-unused-vars
          for (const [key, value] of Object.entries(error.data.errors.children)) {
            value.errors.forEach(async (err) => {
              await dispatch(notificationActions.warning(err, '', duration));
            });
          }
        } else if (error && error.data && error.data.message) {
          dispatch(notificationActions.error(error.statusText, error.data.message, duration));
        } else {
          dispatch(notificationActions.error('Unexpected Error!', 'Please contact server administration.', duration));
        }
      } catch (e) {
        if (error && error.data && error.data.message) {
          dispatch(notificationActions.error(error.statusText, error.data.message, duration));
        } else {
          dispatch(notificationActions.error('Unexpected Error!', 'Please contact server administration.', duration));
        }
      }
      break;
    default:
      break;
  }
}
