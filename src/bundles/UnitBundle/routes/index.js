// eslint-disable-next-line import/no-cycle
import UnitListPage from '../views/pages/UnitListPage';
import UnitShowPage from '../views/pages/UnitShowPage';
import UnitCreatePage from '../views/pages/UnitCreatePage';
import UnitUpdatePage from '../views/pages/UnitUpdatePage';

const baseURL = '/unit';

const historyRoutes = {
  unitList: `${baseURL}`, // * List should be same as baseURL for sidebar hightlight
  unitShow: `${baseURL}/show/:id`,
  unitCreate: `${baseURL}/create`,
  unitUpdate: `${baseURL}/edit/:id`,
};

export const unitRouteLinks = {
  edit: (id) => `${baseURL}/edit/${id}`,
  show: (id) => `${baseURL}/show/${id}`,
  create: `${baseURL}/create`,
};

const menuRoutes = [
  {
    path: historyRoutes.unitList,
    icon: 'deployment-unit',
    exact: true,
    title: 'Unit',
    visibleInSidebar: true,
    component: UnitListPage,
  },
  {
    path: historyRoutes.unitShow,
    icon: 'home',
    exact: true,
    title: 'Unit',
    visibleInSidebar: false,
    component: UnitShowPage,
  },
  {
    path: historyRoutes.unitCreate,
    icon: 'home',
    exact: true,
    title: 'Unit',
    visibleInSidebar: false,
    component: UnitCreatePage,
  },
  {
    path: historyRoutes.unitUpdate,
    icon: 'home',
    exact: true,
    title: 'Unit',
    visibleInSidebar: false,
    component: UnitUpdatePage,
  },
];

const unitRoutes = {
  historyRoutes,
  menuRoutes,
  unitRouteLinks,
};

export default unitRoutes;
