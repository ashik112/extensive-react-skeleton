import {
  get, post, patch, remove,
} from '../../../services/apiService';
import { serverURL } from '../../../constants';
import { unitBaseURL } from '../constants';

export const unitApiRoutes = {
  unitList: `${unitBaseURL}/list`,
  unit: (id) => `${unitBaseURL}/show/${id}`,
  unitCreate: `${unitBaseURL}/new`,
  unitUpdate: (id) => `${unitBaseURL}/update/${id}`,
  unitDelete: (id) => `${unitBaseURL}/delete/${id}`,
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
