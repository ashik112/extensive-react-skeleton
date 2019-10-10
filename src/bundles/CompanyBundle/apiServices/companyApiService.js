import apiService from '../../../services/apiService';
import { serverURL } from '../../../constants';

const companyApiRoutes = {
  companyList: 'company/list',
  company: (id) => `show/${id}`,
  companyCreate: 'company/new',
  companyUpdate: (id) => `company/update/${id}`,
  companyDelete: (id) => `company/delete/${id}`,
};

const getCompanyList = (dispatch) => apiService.get(`${serverURL}${companyApiRoutes.companyList}`, dispatch);
const getCompany = (id, dispatch) => apiService.get(`${serverURL}${companyApiRoutes.company(id)}`, dispatch);
const updateCompany = (id, dispatch) => apiService.get(`${serverURL}${companyApiRoutes.companyUpdate(id)}`, dispatch);
const deleteCompany = (id, dispatch) => apiService.get(`${serverURL}${companyApiRoutes.companyDelete(id)}`, dispatch);
const createCompany = (dispatch) => apiService.get(`${serverURL}${companyApiRoutes.companyCreate}`, dispatch);

const companyApiService = {
  companyApiRoutes,
  getCompanyList,
  getCompany,
  updateCompany,
  deleteCompany,
  createCompany,
};

export default companyApiService;
