import DashboardPage from '../views/pages/DashboardPage';

const historyRoutes = {
  dashboard: '/dashboard',
};

const menuRoutes = [
  {
    path: historyRoutes.dashboard,
    icon: 'home',
    exact: true,
    title: 'Dashboard',
    visibleInSidebar: true,
    component: DashboardPage,
  },
];

const dashboardRoutes = {
  historyRoutes,
  menuRoutes,
};

export default dashboardRoutes;
