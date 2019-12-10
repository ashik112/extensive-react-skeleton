import { apiUrl } from '../constants/config';

function makeURL(baseURL, url) {
  return `${apiUrl}${baseURL}${url}`;
}

export const baseURL = {
  company: 'company/',
  employee: 'employee/',
  auth: 'auth/',
};

export const companyApiRoutes = {
  list: makeURL(baseURL.company, 'list'),
  company: (id) => makeURL(baseURL.company, `show/${id}`),
  new: makeURL(baseURL.company, 'new'),
  edit: (id) => makeURL(baseURL.company, `update/${id}`),
  remove: (id) => makeURL(baseURL.company, `delete/${id}`),
};

export const authApiRoutes = {
  login: makeURL(baseURL.auth, 'login'),
};

export const employeeApiRoutes = {
  datatable: makeURL('', 'employee_list_datatable'),
};
