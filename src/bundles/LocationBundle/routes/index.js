// eslint-disable-next-line import/no-cycle
import LocationListPage from '../views/pages/LocationListPage';
import LocationShowPage from '../views/pages/LocationShowPage';
import LocationCreatePage from '../views/pages/LocationCreatePage';
import LocationUpdatePage from '../views/pages/LocationUpdatePage';

const baseURL = '/location';

const historyRoutes = {
  locationList: `${baseURL}`, // * List should be same as baseURL for sidebar hightlight
  locationShow: `${baseURL}/show/:id`,
  locationCreate: `${baseURL}/create`,
  locationUpdate: `${baseURL}/edit/:id`,
};

export const locationRouteLinks = {
  edit: (id) => `${baseURL}/edit/${id}`,
  show: (id) => `${baseURL}/show/${id}`,
  create: `${baseURL}/create`,
};

const menuRoutes = [
  {
    path: historyRoutes.locationList,
    icon: 'global',
    exact: true,
    title: 'Location',
    visibleInSidebar: true,
    component: LocationListPage,
  },
  {
    path: historyRoutes.locationShow,
    icon: 'home',
    exact: true,
    title: 'Location',
    visibleInSidebar: false,
    component: LocationShowPage,
  },
  {
    path: historyRoutes.locationCreate,
    icon: 'home',
    exact: true,
    title: 'Location',
    visibleInSidebar: false,
    component: LocationCreatePage,
  },
  {
    path: historyRoutes.locationUpdate,
    icon: 'home',
    exact: true,
    title: 'Location',
    visibleInSidebar: false,
    component: LocationUpdatePage,
  },
];

const locationRoutes = {
  historyRoutes,
  menuRoutes,
  locationRouteLinks,
};

export default locationRoutes;
