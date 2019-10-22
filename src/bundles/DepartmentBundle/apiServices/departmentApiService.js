import {
  get, post, patch, remove,
} from '../../../services/apiService';
import { serverURL } from '../../../constants';
import { departmentBaseURL } from '../constants';

export const departmentApiRoutes = {
  departmentList: `${departmentBaseURL}/list`,
  department: (id) => `${departmentBaseURL}/show/${id}`,
  departmentCreate: `${departmentBaseURL}/new`,
  departmentUpdate: (id) => `${departmentBaseURL}/update/${id}`,
  departmentDelete: (id) => `${departmentBaseURL}/delete/${id}`,
};

const getDepartmentList = (dispatch) => get(`${serverURL}${departmentApiRoutes.departmentList}`, dispatch);
const getDepartment = (id, dispatch = () => {}) => get(`${serverURL}${departmentApiRoutes.department(id)}`, dispatch);
const updateDepartment = (id, param, dispatch) => patch(`${serverURL}${departmentApiRoutes.departmentUpdate(id)}`, param, dispatch);
const deleteDepartment = (id, dispatch) => remove(`${serverURL}${departmentApiRoutes.departmentDelete(id)}`, dispatch);
const createDepartment = (param, dispatch) => post(`${serverURL}${departmentApiRoutes.departmentCreate}`, param, dispatch);

const departmentApiService = {
  departmentApiRoutes,
  getDepartmentList,
  getDepartment,
  updateDepartment,
  deleteDepartment,
  createDepartment,
};

export default departmentApiService;
