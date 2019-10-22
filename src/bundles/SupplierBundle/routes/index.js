// eslint-disable-next-line import/no-cycle
import SupplierListPage from '../views/pages/SupplierListPage';
import SupplierShowPage from '../views/pages/SupplierShowPage';
import SupplierCreatePage from '../views/pages/SupplierCreatePage';
import SupplierUpdatePage from '../views/pages/SupplierUpdatePage';
import { supplierBaseURL } from '../constants';

const historyRoutes = {
  supplierList: `${supplierBaseURL}`, // * List should be same as supplierBaseURL for sidebar hightlight
  supplierShow: `${supplierBaseURL}/show/:id`,
  supplierCreate: `${supplierBaseURL}/create`,
  supplierUpdate: `${supplierBaseURL}/edit/:id`,
};

const menuRoutes = [
  {
    path: historyRoutes.supplierList,
    icon: 'import',
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
};

export default supplierRoutes;
