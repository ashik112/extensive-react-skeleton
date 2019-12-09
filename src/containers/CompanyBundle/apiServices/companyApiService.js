import {
  get, post, patch, remove,
} from '../../../services/apiService';
import { apiUrl } from '../../../constants/config';
import { companyBaseURL } from '../constants';

export const companyApiRoutes = {
  companyList: `${companyBaseURL}/list`,
  company: (id) => `${companyBaseURL}/show/${id}`,
  companyCreate: `${companyBaseURL}/new`,
  companyUpdate: (id) => `${companyBaseURL}/update/${id}`,
  companyDelete: (id) => `${companyBaseURL}/delete/${id}`,
};

const getCompanyList = (dispatch) => get(`${apiUrl}${companyApiRoutes.companyList}`, dispatch);
const getCompany = (id = () => {}) => get(`${apiUrl}${companyApiRoutes.company(id)}`);
const updateCompany = (id, param) => patch(`${apiUrl}${companyApiRoutes.companyUpdate(id)}`, param);
const deleteCompany = (id) => remove(`${apiUrl}${companyApiRoutes.companyDelete(id)}`);
const createCompany = (param) => post(`${apiUrl}${companyApiRoutes.companyCreate}`, param);

const companyApiService = {
  companyApiRoutes,
  getCompanyList,
  getCompany,
  updateCompany,
  deleteCompany,
  createCompany,
};

export default companyApiService;
