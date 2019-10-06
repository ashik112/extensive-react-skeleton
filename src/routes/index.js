/**
 * * [Routes for Sidebar]
 */
import DashboardPage from '../pages/Dashboard';

export const menuRoutes = [
  {
    path: '/dashboard',
    exact: true,
    sidebarTitle: 'Dashboard',
    visibleInSidebar: true,
    component: DashboardPage,
  },
];

/**
 * * [routes for history]
 */
export const historyRoutes = {
  dashboard: '/dashboard',
  login: '/',
};
