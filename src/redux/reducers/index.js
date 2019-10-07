import { combineReducers } from 'redux';
import companyReducer from './companyReducer';
import userReducer from './userReducer';
import alertReducer from './alertReducer';
import notificationReducer from './notificationReducer';

export default combineReducers({
  companyReducer,
  userReducer,
  alertReducer,
  notificationReducer,
});
