import companyRoutes from '../bundles/CompanyBundle/routes';
import dashboardRoutes from '../bundles/DashboardBundle/routes';
import unitRoutes from '../bundles/UnitBundle/routes';
import authenticationRoutes from '../bundles/AuthenticationBundle/routes';

/**
 * * Routes for history
 */
export const historyRoutes = {
  ...authenticationRoutes.historyRoutes,
  ...dashboardRoutes.historyRoutes,
  ...companyRoutes.historyRoutes,
  ...unitRoutes.historyRoutes,
};

/**
 * * Routes for Sidebar
 */
export const menuRoutes = [
  ...dashboardRoutes.menuRoutes,
  ...companyRoutes.menuRoutes,
  ...unitRoutes.menuRoutes,
];
