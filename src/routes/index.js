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
    exact: true,
    sidebarTitle: 'Dashboard',
    visibleInSidebar: true,
    component: DashboardPage,
  },
];
