// eslint-disable-next-line import/no-cycle
import SupplierListPage from '../views/pages/SupplierListPage';
import SupplierShowPage from '../views/pages/SupplierShowPage';
import SupplierCreatePage from '../views/pages/SupplierCreatePage';
import SupplierUpdatePage from '../views/pages/SupplierUpdatePage';

const baseURL = '/supplier';

const historyRoutes = {
  supplierList: `${baseURL}`, // * List should be same as baseURL for sidebar hightlight
  supplierShow: `${baseURL}/show/:id`,
  supplierCreate: `${baseURL}/create`,
  supplierUpdate: `${baseURL}/edit/:id`,
};

export const supplierRouteLinks = {
  edit: (id) => `${baseURL}/edit/${id}`,
  show: (id) => `${baseURL}/show/${id}`,
  create: `${baseURL}/create`,
};

const menuRoutes = [
  {
    path: historyRoutes.supplierList,
    icon: 'deployment-unit',
    exact: true,
    title: 'Supplier',
    visibleInSidebar: true,
    component: SupplierListPage,
  },
  {
    path: historyRoutes.supplierShow,
    icon: 'home',
    exact: true,
    title: 'Supplier',
    visibleInSidebar: false,
    component: SupplierShowPage,
  },
  {
    path: historyRoutes.supplierCreate,
    icon: 'home',
    exact: true,
    title: 'Supplier',
    visibleInSidebar: false,
    component: SupplierCreatePage,
  },
  {
    path: historyRoutes.supplierUpdate,
    icon: 'home',
    exact: true,
    title: 'Supplier',
    visibleInSidebar: false,
    component: SupplierUpdatePage,
  },
];

const supplierRoutes = {
  historyRoutes,
  menuRoutes,
  supplierRouteLinks,
};

export default supplierRoutes;
