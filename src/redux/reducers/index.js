import { combineReducers } from 'redux';
import companyReducer from '../../containers/CompanyBundle/redux/reducer';
import alertReducer from './alertReducer';
import notificationReducer from './notificationReducer';
import authReducer from '../../containers/AuthenticationBundle/redux/reducer';

export default combineReducers({
  companyReducer,
  alertReducer,
  authReducer,
  notificationReducer,
});
