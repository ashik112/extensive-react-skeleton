import supplierActionTypes from '../actionTypes';
import supplierApiService from '../../apiServices/supplierApiService';
import checkHttpError from '../../../../services/checkHttpError';
import { showAlert } from '../../../../services/generalhelper';
import history from '../../../../services/history';
import supplierRouteLinks from '../../routes/links';

const updateSupplierBegin = () => ({
  type: supplierActionTypes.SUPPLIER_UPDATE_REQUEST,
});

const updateSupplierSuccess = (data) => ({
  type: supplierActionTypes.SUPPLIER_UPDATE_SUCCESS,
  payload: data,
});

const updateSupplierFailure = (error) => ({
  type: supplierActionTypes.SUPPLIER_UPDATE_FAILURE,
  payload: { error },
});

const updateSupplier = (id, param) => async (dispatch) => {
  dispatch(updateSupplierBegin());
  await supplierApiService.updateSupplier(id, param, dispatch)
    .then((res) => {
      const data = res.data !== null ? res.data : {};
      dispatch(updateSupplierSuccess(data));
      showAlert('success', 'Operation Successful!', 5);
      history.push(supplierRouteLinks.show(data.id));
    })
    .catch((err) => {
      checkHttpError(err, 2, 30, dispatch);
      dispatch(updateSupplierFailure(err));
    });
};

export default updateSupplier;
