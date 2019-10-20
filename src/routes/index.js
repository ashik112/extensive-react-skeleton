import companyRoutes from '../bundles/CompanyBundle/routes';
import departmentRoutes from '../bundles/DepartmentBundle/routes';
import dashboardRoutes from '../bundles/DashboardBundle/routes';
import supplierRoutes from '../bundles/SupplierBundle/routes';
import authenticationRoutes from '../bundles/AuthenticationBundle/routes';
import locationRoutes from '../bundles/LocationBundle/routes';

/**
 * * Routes for history
 */
export const historyRoutes = {
  ...authenticationRoutes.historyRoutes,
  ...dashboardRoutes.historyRoutes,
  ...companyRoutes.historyRoutes,
  ...departmentRoutes.historyRoutes,
  ...supplierRoutes.historyRoutes,
  ...locationRoutes.historyRoutes,
};

/**
 * * Routes for Sidebar
 */
export const menuRoutes = [
  ...dashboardRoutes.menuRoutes,
  ...companyRoutes.menuRoutes,
  ...departmentRoutes.menuRoutes,
  ...supplierRoutes.menuRoutes,
  ...locationRoutes.menuRoutes,
];
