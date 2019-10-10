import companyRoutes from '../bundles/CompanyBundle/routes';
import dashboardRoutes from '../bundles/DashboardBundle/routes';
import authenticationRoutes from '../bundles/AuthenticationBundle/routes';

/**
 * * Routes for history
 */
export const historyRoutes = {
  ...authenticationRoutes.historyRoutes,
  ...dashboardRoutes.historyRoutes,
  ...companyRoutes.historyRoutes,
};

/**
 * * Routes for Sidebar
 */
export const menuRoutes = [
  ...dashboardRoutes.menuRoutes,
  ...companyRoutes.menuRoutes,
];
