// eslint-disable-next-line import/no-cycle
import CompanyListPage from '../views/CompanyListPage';
import CompanyShowPage from '../views/CompanyShowPage';
import CompanyCreatePage from '../views/CompanyCreatePage';
import CompanyUpdatePage from '../views/CompanyUpdatePage';

const baseURL = '/company';

const historyRoutes = {
  companyList: `${baseURL}`, // * List should be same as baseURL for sidebar hightlight
  companyShow: `${baseURL}/show/:id`,
  companyCreate: `${baseURL}/create`,
  companyUpdate: `${baseURL}/edit/:id`,
};

export const companyRouteLinks = {
  edit: (id) => `${baseURL}/edit/${id}`,
  show: (id) => `${baseURL}/show/${id}`,
  create: `${baseURL}/create`,
};

const menuRoutes = [
  {
    path: historyRoutes.companyList,
    icon: 'home',
    exact: true,
    title: 'Company',
    visibleInSidebar: true,
    component: CompanyListPage,
  },
  {
    path: historyRoutes.companyShow,
    icon: 'home',
    exact: true,
    title: 'Company',
    visibleInSidebar: false,
    component: CompanyShowPage,
  },
  {
    path: historyRoutes.companyCreate,
    icon: 'home',
    exact: true,
    title: 'Company',
    visibleInSidebar: false,
    component: CompanyCreatePage,
  },
  {
    path: historyRoutes.companyUpdate,
    icon: 'home',
    exact: true,
    title: 'Company',
    visibleInSidebar: false,
    component: CompanyUpdatePage,
  },
];

const companyRoutes = {
  historyRoutes,
  menuRoutes,
  companyRouteLinks,
};

export default companyRoutes;
