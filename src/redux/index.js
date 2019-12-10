import { combineReducers } from 'redux';
import companyReducer from '../containers/CompanyBundle/redux/reducer';
import alertReducer from './alert/alertReducer';
import notificationReducer from './notification/notificationReducer';
import authReducer from '../containers/AuthenticationBundle/redux/reducer';

export default combineReducers({
  companyReducer,
  alertReducer,
  authReducer,
  notificationReducer,
});
