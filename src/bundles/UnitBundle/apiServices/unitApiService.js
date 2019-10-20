import {
  get, post, patch, remove,
} from '../../../services/apiService';
import { serverURL } from '../../../constants';

export const unitApiRoutes = {
  unitList: 'unit/list',
  unit: (id) => `unit/show/${id}`,
  unitCreate: 'unit/new',
  unitUpdate: (id) => `unit/update/${id}`,
  unitDelete: (id) => `unit/delete/${id}`,
};

const getUnitList = (dispatch) => get(`${serverURL}${unitApiRoutes.unitList}`, dispatch);
const getUnit = (id, dispatch = () => {}) => get(`${serverURL}${unitApiRoutes.unit(id)}`, dispatch);
const updateUnit = (id, param, dispatch) => patch(`${serverURL}${unitApiRoutes.unitUpdate(id)}`, param, dispatch);
const deleteUnit = (id, dispatch) => remove(`${serverURL}${unitApiRoutes.unitDelete(id)}`, dispatch);
const createUnit = (param, dispatch) => post(`${serverURL}${unitApiRoutes.unitCreate}`, param, dispatch);

const unitApiService = {
  unitApiRoutes,
  getUnitList,
  getUnit,
  updateUnit,
  deleteUnit,
  createUnit,
};

export default unitApiService;
