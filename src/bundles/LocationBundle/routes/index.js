// eslint-disable-next-line import/no-cycle
import LocationListPage from '../views/pages/LocationListPage';
import LocationShowPage from '../views/pages/LocationShowPage';
import LocationCreatePage from '../views/pages/LocationCreatePage';
import LocationUpdatePage from '../views/pages/LocationUpdatePage';
import { locationBaseURL } from '../constants';

const historyRoutes = {
  locationList: `${locationBaseURL}`, // * List should be same as locationBaseURL for sidebar hightlight
  locationShow: `${locationBaseURL}/show/:id`,
  locationCreate: `${locationBaseURL}/create`,
  locationUpdate: `${locationBaseURL}/edit/:id`,
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
};

export default locationRoutes;
