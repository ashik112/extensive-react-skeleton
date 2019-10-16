import {get, post} from '../../../services/apiService';
import { serverURL } from '../../../constants';

const companyApiRoutes = {
  companyList: 'company/list',
  company: (id) => `company/show/${id}`,
  companyCreate: 'company/new',
  companyUpdate: (id) => `company/update/${id}`,
  companyDelete: (id) => `company/delete/${id}`,
};

const getCompanyList = (dispatch) => get(`${serverURL}${companyApiRoutes.companyList}`, dispatch);
const getCompany = (id, dispatch = () => {}) => get(`${serverURL}${companyApiRoutes.company(id)}`, dispatch);
const updateCompany = (id, dispatch) => get(`${serverURL}${companyApiRoutes.companyUpdate(id)}`, dispatch);
const deleteCompany = (id, dispatch) => get(`${serverURL}${companyApiRoutes.companyDelete(id)}`, dispatch);
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
