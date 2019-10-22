import {
  get, post, patch, remove,
} from '../../../services/apiService';
import { serverURL } from '../../../constants';
import { companyBaseURL } from '../constants';

export const companyApiRoutes = {
  companyList: `${companyBaseURL}/list`,
  company: (id) => `${companyBaseURL}/show/${id}`,
  companyCreate: `${companyBaseURL}/new`,
  companyUpdate: (id) => `${companyBaseURL}/update/${id}`,
  companyDelete: (id) => `${companyBaseURL}/delete/${id}`,
};

const getCompanyList = (dispatch) => get(`${serverURL}${companyApiRoutes.companyList}`, dispatch);
const getCompany = (id, dispatch = () => {}) => get(`${serverURL}${companyApiRoutes.company(id)}`, dispatch);
const updateCompany = (id, param, dispatch) => patch(`${serverURL}${companyApiRoutes.companyUpdate(id)}`, param, dispatch);
const deleteCompany = (id, dispatch) => remove(`${serverURL}${companyApiRoutes.companyDelete(id)}`, dispatch);
const createCompany = (param, dispatch) => post(`${serverURL}${companyApiRoutes.companyCreate}`, param, dispatch);

const companyApiService = {
  companyApiRoutes,
  getCompanyList,
  getCompany,
  updateCompany,
  deleteCompany,
  createCompany,
};

export default companyApiService;
