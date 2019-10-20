import supplierActionTypes from '../actionTypes';
import supplierApiService from '../../apiServices/supplierApiService';
import checkHttpError from '../../../../services/checkHttpError';
import { showAlert } from '../../../../services/generalhelper';
import history from '../../../../services/history';
import supplierRouteLinks from '../../routes/links';

const createSupplierBegin = () => ({
  type: supplierActionTypes.SUPPLIER_CREATE_REQUEST,
});

const createSupplierSuccess = (data) => ({
  type: supplierActionTypes.SUPPLIER_CREATE_SUCCESS,
  payload: data,
});

const createSupplierFailure = (error) => ({
  type: supplierActionTypes.SUPPLIER_CREATE_FAILURE,
  payload: { error },
});

const createSupplier = (param) => async (dispatch) => {
  dispatch(createSupplierBegin());
  await supplierApiService.createSupplier(param, dispatch)
    .then((res) => {
      const data = res.data !== null ? res.data : {};
      dispatch(createSupplierSuccess(data));
      showAlert('success', 'Supplier creation successful!', 5);
      history.push(supplierRouteLinks.show(data.id));
    })
    .catch((err) => {
      checkHttpError(err, 2, 30, dispatch);
      dispatch(createSupplierFailure(err));
    });
};

export default createSupplier;
