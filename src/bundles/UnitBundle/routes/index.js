// eslint-disable-next-line import/no-cycle
import UnitListPage from '../views/pages/UnitListPage';
import UnitShowPage from '../views/pages/UnitShowPage';
import UnitCreatePage from '../views/pages/UnitCreatePage';
import UnitUpdatePage from '../views/pages/UnitUpdatePage';
import { unitBaseURL } from '../constants';

const historyRoutes = {
  unitList: `${unitBaseURL}`, // * List should be same as unitBaseURL for sidebar hightlight
  unitShow: `${unitBaseURL}/show/:id`,
  unitCreate: `${unitBaseURL}/create`,
  unitUpdate: `${unitBaseURL}/edit/:id`,
};

const menuRoutes = [
  {
    path: historyRoutes.unitList,
    icon: 'experiment',
    exact: true,
    title: 'Unit',
    visibleInSidebar: true,
    component: UnitListPage,
  },
  {
    path: historyRoutes.unitShow,
    icon: 'experiment',
    exact: true,
    title: 'Unit',
    visibleInSidebar: false,
    component: UnitShowPage,
  },
  {
    path: historyRoutes.unitCreate,
    icon: 'experiment',
    exact: true,
    title: 'Unit',
    visibleInSidebar: false,
    component: UnitCreatePage,
  },
  {
    path: historyRoutes.unitUpdate,
    icon: 'experiment',
    exact: true,
    title: 'Unit',
    visibleInSidebar: false,
    component: UnitUpdatePage,
  },
];

const unitRoutes = {
  historyRoutes,
  menuRoutes,
};

export default unitRoutes;
