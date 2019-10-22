// eslint-disable-next-line import/no-cycle
import DepartmentListPage from '../views/pages/DepartmentListPage';
import DepartmentShowPage from '../views/pages/DepartmentShowPage';
import DepartmentCreatePage from '../views/pages/DepartmentCreatePage';
import DepartmentUpdatePage from '../views/pages/DepartmentUpdatePage';
import { departmentBaseURL } from '../constants';

const historyRoutes = {
  departmentList: `${departmentBaseURL}`, // * List should be same as departmentBaseURL for sidebar hightlight
  departmentShow: `${departmentBaseURL}/show/:id`,
  departmentCreate: `${departmentBaseURL}/create`,
  departmentUpdate: `${departmentBaseURL}/edit/:id`,
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
};

export default departmentRoutes;
