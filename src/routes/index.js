import DashboardPage from '../bundles/DashboardBundle/view/pages/DashboardPage';

/**
 * * [routes for history]
 */
export const historyRoutes = {
  dashboard: '/dashboard',
  login: '/',
};

/**
 * * [Routes for Sidebar]
 */
export const menuRoutes = [
  {
    path: historyRoutes.dashboard,
    icon: 'home',
    exact: true,
    title: 'Dashboard',
    visibleInSidebar: true,
    component: DashboardPage,
  },
];
