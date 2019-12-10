import CompanyListPage
  from '../containers/CompanyBundle/pages/CompanyListPage';
import CompanyShowPage
  from '../containers/CompanyBundle/pages/CompanyShowPage';
import CompanyCreatePage
  from '../containers/CompanyBundle/pages/CompanyCreatePage';
import CompanyUpdatePage
  from '../containers/CompanyBundle/pages/CompanyUpdatePage';

import historyRoutes from './historyRoutes';
import DashboardPage
  from '../containers/DashboardBundle/pages/DashboardPage';

const menuRoutes = [
  {
    title: 'Admin',
    submenu: true,
    child: [
      {
        path: historyRoutes.dashboard,
        icon: 'home',
        exact: true,
        title: 'Dashboard',
        visibleInSidebar: true,
        component: DashboardPage,
      },
    ],
  },
  {
    path: historyRoutes.dashboard,
    icon: 'home',
    exact: true,
    title: 'Dashboard',
    visibleInSidebar: true,
    component: DashboardPage,
  },
  {
    path: historyRoutes.company.list,
    icon: 'share-alt',
    exact: true,
    title: 'Company',
    visibleInSidebar: true,
    component: CompanyListPage,
  },
  {
    path: historyRoutes.company.show(null),
    icon: 'home',
    exact: true,
    title: 'Company',
    visibleInSidebar: false,
    component: CompanyShowPage,
  },
  {
    path: historyRoutes.company.create,
    icon: 'home',
    exact: true,
    title: 'Company',
    visibleInSidebar: false,
    component: CompanyCreatePage,
  },
  {
    path: historyRoutes.company.edit(null),
    icon: 'home',
    exact: true,
    title: 'Company',
    visibleInSidebar: false,
    component: CompanyUpdatePage,
  },
];

export default menuRoutes;
