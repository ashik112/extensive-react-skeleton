import {
  get, post, patch, remove,
} from '../../../services/apiService';
import { serverURL } from '../../../constants';

export const supplierApiRoutes = {
  supplierList: 'supplier/list',
  supplier: (id) => `supplier/show/${id}`,
  supplierCreate: 'supplier/new',
  supplierUpdate: (id) => `supplier/update/${id}`,
  supplierDelete: (id) => `supplier/delete/${id}`,
};

const getSupplierList = (dispatch) => get(`${serverURL}${supplierApiRoutes.supplierList}`, dispatch);
const getSupplier = (id, dispatch = () => {}) => get(`${serverURL}${supplierApiRoutes.supplier(id)}`, dispatch);
const updateSupplier = (id, param, dispatch) => patch(`${serverURL}${supplierApiRoutes.supplierUpdate(id)}`, param, dispatch);
const deleteSupplier = (id, dispatch) => remove(`${serverURL}${supplierApiRoutes.supplierDelete(id)}`, dispatch);
const createSupplier = (param, dispatch) => post(`${serverURL}${supplierApiRoutes.supplierCreate}`, param, dispatch);

const supplierApiService = {
  supplierApiRoutes,
  getSupplierList,
  getSupplier,
  updateSupplier,
  deleteSupplier,
  createSupplier,
};

export default supplierApiService;
