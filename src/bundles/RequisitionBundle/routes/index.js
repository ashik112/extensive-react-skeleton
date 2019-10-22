// eslint-disable-next-line import/no-cycle
import RequisitionListPage from '../views/pages/RequisitionListPage';
import RequisitionShowPage from '../views/pages/RequisitionShowPage';
import RequisitionCreatePage from '../views/pages/RequisitionCreatePage';
import RequisitionUpdatePage from '../views/pages/RequisitionUpdatePage';
import { requisitionBaseURL } from '../constants';

const historyRoutes = {
  requisitionList: `${requisitionBaseURL}`, // * List should be same as requisitionBaseURL for sidebar hightlight
  requisitionShow: `${requisitionBaseURL}/show/:id`,
  requisitionCreate: `${requisitionBaseURL}/create`,
  requisitionUpdate: `${requisitionBaseURL}/edit/:id`,
};

const menuRoutes = [
  {
    path: historyRoutes.requisitionList,
    icon: 'shopping-cart',
    exact: true,
    title: 'Requisition',
    visibleInSidebar: true,
    component: RequisitionListPage,
  },
  {
    path: historyRoutes.requisitionShow,
    icon: 'home',
    exact: true,
    title: 'Requisition',
    visibleInSidebar: false,
    component: RequisitionShowPage,
  },
  {
    path: historyRoutes.requisitionCreate,
    icon: 'home',
    exact: true,
    title: 'Requisition',
    visibleInSidebar: false,
    component: RequisitionCreatePage,
  },
  {
    path: historyRoutes.requisitionUpdate,
    icon: 'home',
    exact: true,
    title: 'Requisition',
    visibleInSidebar: false,
    component: RequisitionUpdatePage,
  },
];

const requisitionRoutes = {
  historyRoutes,
  menuRoutes,
};

export default requisitionRoutes;
