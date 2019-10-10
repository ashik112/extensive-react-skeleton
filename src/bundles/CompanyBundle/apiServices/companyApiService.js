import { get } from '../../../services/apiService';
import { serverURL } from '../../../constants';

const companyApiRoutes = {
  companyList: 'company/list',
  company: (id) => `show/${id}`,
  companyCreate: 'company/new',
  companyUpdate: (id) => `company/update/${id}`,
  companyDelete: (id) => `company/delete/${id}`,
};

const getCompanyList = (dispatch) => get(`${serverURL}${companyApiRoutes.companyList}`, dispatch);
const getCompany = (id, dispatch) => get(`${serverURL}${companyApiRoutes.company(id)}`, dispatch);
const updateCompany = (id, dispatch) => get(`${serverURL}${companyApiRoutes.companyUpdate(id)}`, dispatch);
const deleteCompany = (id, dispatch) => get(`${serverURL}${companyApiRoutes.companyDelete(id)}`, dispatch);
const createCompany = (dispatch) => get(`${serverURL}${companyApiRoutes.companyCreate}`, dispatch);

const companyApiService = {
  companyApiRoutes,
  getCompanyList,
  getCompany,
  updateCompany,
  deleteCompany,
  createCompany,
};

export default companyApiService;
