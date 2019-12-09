import CompanyListPage
  from '../containers/CompanyBundle/views/pages/CompanyListPage';
import CompanyShowPage
  from '../containers/CompanyBundle/views/pages/CompanyShowPage';
import CompanyCreatePage
  from '../containers/CompanyBundle/views/pages/CompanyCreatePage';
import CompanyUpdatePage
  from '../containers/CompanyBundle/views/pages/CompanyUpdatePage';

import historyRoutes from './historyRoutes';
import DashboardPage
  from '../containers/DashboardBundle/views/pages/DashboardPage';

const menuRoutes = [
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
