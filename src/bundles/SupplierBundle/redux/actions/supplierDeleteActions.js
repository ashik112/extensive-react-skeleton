import supplierActionTypes from '../actionTypes';
import supplierApiService from '../../apiServices/supplierApiService';
import checkHttpError from '../../../../services/checkHttpError';
import { showAlert } from '../../../../services/generalhelper';
import history from '../../../../services/history';
import supplierRouteLinks from '../../routes/links';

const deleteSupplierBegin = () => ({
  type: supplierActionTypes.DEPARTMENT_DELETE_REQUEST,
});

const deleteSupplierSuccess = (data) => ({
  type: supplierActionTypes.DEPARTMENT_DELETE_SUCCESS,
  payload: data,
});

const deleteSupplierFailure = (error) => ({
  type: supplierActionTypes.DEPARTMENT_DELETE_FAILURE,
  payload: { error },
});

const deleteSupplier = (param) => async (dispatch) => {
  dispatch(deleteSupplierBegin());
  await supplierApiService.deleteSupplier(param, dispatch)
    .then((res) => {
      const data = res.data !== null ? res.data : {};
      dispatch(deleteSupplierSuccess(data));
      showAlert('success', 'Operation Successful!', 5);
      history.push(supplierRouteLinks.list);
    })
    .catch((err) => {
      checkHttpError(err, 2, 30, dispatch);
      dispatch(deleteSupplierFailure(err));
    });
};

export default deleteSupplier;
