import {
  get, post, patch, remove,
} from '../../../services/apiService';
import { companyApiRoutes } from '../../../routes/apiRoutes';


const getCompanyList = () => get(companyApiRoutes.list);
const getCompany = (id) => get(companyApiRoutes.company(id));
const updateCompany = (id, param) => patch(companyApiRoutes.edit(id), param);
const deleteCompany = (id) => remove(companyApiRoutes.remove(id));
const createCompany = (param) => post(companyApiRoutes.new, param);

const companyApiService = {
  getCompanyList,
  getCompany,
  updateCompany,
  deleteCompany,
  createCompany,
};

export default companyApiService;
