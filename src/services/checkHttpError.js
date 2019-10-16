import alertActions from '../redux/actions/alertActions';
import notificationActions from '../redux/actions/notificationActions';

/**
 * 1 for alert, 2 for notification
 * @param error
 * @param alertType
 * @param dispatch
 * @param duration
 */
export default function checkHttpError(error, alertType, duration = 5, dispatch) {
  switch (alertType) {
    case 1:
      try {
        if (error.response.data.errors.children) {
          // eslint-disable-next-line no-restricted-syntax,no-unused-vars
          for (const [key, value] of Object.entries(error.response.data.errors.children)) {
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
        if (error.response && error.response.statusText) {
          dispatch(alertActions.error(error.response.statusText, duration));
        } else if (error.response.message) {
          dispatch(alertActions.error(error.response.message, duration));
        } else {
          dispatch(alertActions.error('Unexpected Error', duration));
        }
      } catch (e) {
        dispatch(alertActions.error('Unexpected Error', duration));
      }
      break;
    case 2:
      try {
        if (error.response.data.errors.children) {
          // eslint-disable-next-line no-restricted-syntax,no-unused-vars
          for (const [key, value] of Object.entries(error.response.data.errors.children)) {
            value.errors.forEach(async (err) => {
              await dispatch(notificationActions.warning(err, '', duration));
            });
          }
        }
      } catch (e) {
        if (error.response && error.response.data && error.response.data.message) {
          dispatch(notificationActions.error(error.response.statusText, error.response.data.message, duration));
        } else {
          dispatch(notificationActions.error('Unexpected Error!', 'Please contact server administration.', duration));
        }
      }
      break;
    default:
      break;
  }
}
