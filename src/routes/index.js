import companyRoutes from '../bundles/CompanyBundle/routes';
import departmentRoutes from '../bundles/DepartmentBundle/routes';
import dashboardRoutes from '../bundles/DashboardBundle/routes';
import supplierRoutes from '../bundles/SupplierBundle/routes';
import unitRoutes from '../bundles/UnitBundle/routes';
import authenticationRoutes from '../bundles/AuthenticationBundle/routes';

/**
 * * Routes for history
 */
export const historyRoutes = {
  ...authenticationRoutes.historyRoutes,
  ...dashboardRoutes.historyRoutes,
  ...companyRoutes.historyRoutes,
  ...departmentRoutes.historyRoutes,
  ...supplierRoutes.historyRoutes,
  ...unitRoutes.historyRoutes,
};

/**
 * * Routes for Sidebar
 */
export const menuRoutes = [
  ...dashboardRoutes.menuRoutes,
  ...companyRoutes.menuRoutes,
  ...departmentRoutes.menuRoutes,
  ...supplierRoutes.menuRoutes,
  ...unitRoutes.menuRoutes,
];
