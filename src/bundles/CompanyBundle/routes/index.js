import CompanyListPage from '../views/CompanyListPage';

const historyRoutes = {
  companyList: '/company-list',
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
];

const companyRoutes = {
  historyRoutes,
  menuRoutes,
};

export default companyRoutes;
