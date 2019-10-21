import { combineReducers } from 'redux';
import companyReducer from '../../bundles/CompanyBundle/redux/reducer';
import departmentReducer from '../../bundles/DepartmentBundle/redux/reducer';
import supplierReducer from '../../bundles/SupplierBundle/redux/reducer';
import unitReducer from '../../bundles/UnitBundle/redux/reducer';
import locationReducer from '../../bundles/LocationBundle/redux/reducer';
import productCategoryReducer from '../../bundles/ProductCategoryBundle/redux/reducer';
import alertReducer from './alertReducer';
import notificationReducer from './notificationReducer';
import authReducer from '../../bundles/AuthenticationBundle/redux/reducer';

export default combineReducers({
  companyReducer,
  departmentReducer,
  alertReducer,
  authReducer,
  notificationReducer,
  supplierReducer,
  unitReducer,
  locationReducer,
  productCategoryReducer,
});
