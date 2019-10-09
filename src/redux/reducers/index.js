import { combineReducers } from 'redux';
import companyReducer from './companyReducer';
import alertReducer from './alertReducer';
import notificationReducer from './notificationReducer';
import authReducer from '../../bundles/AuthenticationBundle/redux/reducer';

export default combineReducers({
  companyReducer,
  alertReducer,
  authReducer,
  notificationReducer,
});
