/* eslint-disable no-unused-vars */
import supplierActionTypes from '../actionTypes';
import alertActions from '../../../../redux/actions/alertActions';
import supplierApiService from '../../apiServices/supplierApiService';
import createSupplier from './supplierCreateActions';
import updateSupplier from './supplierUpdateActions';
import deleteSupplier from './supplierDeleteActions';
import checkHttpError from '../../../../services/checkHttpError';

const fetchSupplierListBegin = () => ({
  type: supplierActionTypes.SUPPLIER_LIST_FETCH_REQUEST,
});

const fetchSupplierListSuccess = (data) => ({
  type: supplierActionTypes.SUPPLIER_LIST_FETCH_SUCCESS,
  payload: data,
});

const fetchSupplierListFailure = (error) => ({
  type: supplierActionTypes.SUPPLIER_LIST_FETCH_FAILURE,
  payload: { error },
});

const clearSupplierStore = () => ({
  type: supplierActionTypes.CLEAR_ALL,
});

const fetchSupplierList = () => async (dispatch) => {
  dispatch(fetchSupplierListBegin());
  await supplierApiService.getSupplierList(dispatch)
    .then((res) => {
      const data = res.data !== null ? res.data : {};
      dispatch(fetchSupplierListSuccess(data));
    })
    .catch((err) => {
      checkHttpError(err, 1, 5, dispatch);
      dispatch(fetchSupplierListFailure(err));
    });
};

const supplierActions = {
  fetchSupplierList,
  createSupplier,
  updateSupplier,
  clearSupplierStore,
  deleteSupplier,
};

export default supplierActions;
