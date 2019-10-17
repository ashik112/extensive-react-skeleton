// eslint-disable-next-line import/no-cycle
import DepartmentListPage from '../views/pages/DepartmentListPage';
import DepartmentShowPage from '../views/pages/DepartmentShowPage';
import DepartmentCreatePage from '../views/pages/DepartmentCreatePage';
import DepartmentUpdatePage from '../views/pages/DepartmentUpdatePage';

const baseURL = '/department';

const historyRoutes = {
  departmentList: `${baseURL}`, // * List should be same as baseURL for sidebar hightlight
  departmentShow: `${baseURL}/show/:id`,
  departmentCreate: `${baseURL}/create`,
  departmentUpdate: `${baseURL}/edit/:id`,
};

export const departmentRouteLinks = {
  edit: (id) => `${baseURL}/edit/${id}`,
  show: (id) => `${baseURL}/show/${id}`,
  create: `${baseURL}/create`,
};

const menuRoutes = [
  {
    path: historyRoutes.departmentList,
    icon: 'deployment-unit',
    exact: true,
    title: 'Department',
    visibleInSidebar: true,
    component: DepartmentListPage,
  },
  {
    path: historyRoutes.departmentShow,
    icon: 'home',
    exact: true,
    title: 'Department',
    visibleInSidebar: false,
    component: DepartmentShowPage,
  },
  {
    path: historyRoutes.departmentCreate,
    icon: 'home',
    exact: true,
    title: 'Department',
    visibleInSidebar: false,
    component: DepartmentCreatePage,
  },
  {
    path: historyRoutes.departmentUpdate,
    icon: 'home',
    exact: true,
    title: 'Department',
    visibleInSidebar: false,
    component: DepartmentUpdatePage,
  },
];

const departmentRoutes = {
  historyRoutes,
  menuRoutes,
  departmentRouteLinks,
};

export default departmentRoutes;