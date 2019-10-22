// eslint-disable-next-line import/no-cycle
import CompanyListPage from '../views/pages/CompanyListPage';
import CompanyShowPage from '../views/pages/CompanyShowPage';
import CompanyCreatePage from '../views/pages/CompanyCreatePage';
import CompanyUpdatePage from '../views/pages/CompanyUpdatePage';
import { companyBaseURL } from '../constants';

const historyRoutes = {
  companyList: `${companyBaseURL}`, // * List should be same as companyBaseURL for sidebar hightlight
  companyShow: `${companyBaseURL}/show/:id`,
  companyCreate: `${companyBaseURL}/create`,
  companyUpdate: `${companyBaseURL}/edit/:id`,
};

const menuRoutes = [
  {
    path: historyRoutes.companyList,
    icon: 'share-alt',
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
};

export default companyRoutes;
