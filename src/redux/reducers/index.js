import { combineReducers } from 'redux';
import companyReducer from '../../bundles/CompanyBundle/redux/reducer';
import unitReducer from '../../bundles/UnitBundle/redux/reducer';
import alertReducer from './alertReducer';
import notificationReducer from './notificationReducer';
import authReducer from '../../bundles/AuthenticationBundle/redux/reducer';

export default combineReducers({
  companyReducer,
  alertReducer,
  authReducer,
  notificationReducer,
  unitReducer,
});
