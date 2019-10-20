// eslint-disable-next-line import/no-cycle
import ProductCategoryListPage from '../views/pages/ProductCategoryListPage';
import ProductCategoryShowPage from '../views/pages/ProductCategoryShowPage';
import ProductCategoryCreatePage from '../views/pages/ProductCategoryCreatePage';
import ProductCategoryUpdatePage from '../views/pages/ProductCategoryUpdatePage';

const baseURL = '/product-category';

const historyRoutes = {
  productCategoryList: `${baseURL}`, // * List should be same as baseURL for sidebar hightlight
  productCategoryShow: `${baseURL}/show/:id`,
  productCategoryCreate: `${baseURL}/create`,
  productCategoryUpdate: `${baseURL}/edit/:id`,
};

export const productCategoryRouteLinks = {
  edit: (id) => `${baseURL}/edit/${id}`,
  show: (id) => `${baseURL}/show/${id}`,
  create: `${baseURL}/create`,
};

const menuRoutes = [
  {
    path: historyRoutes.productCategoryList,
    icon: 'hdd',
    exact: true,
    title: 'Product Category',
    visibleInSidebar: true,
    component: ProductCategoryListPage,
  },
  {
    path: historyRoutes.productCategoryShow,
    icon: 'home',
    exact: true,
    title: 'Product Category',
    visibleInSidebar: false,
    component: ProductCategoryShowPage,
  },
  {
    path: historyRoutes.productCategoryCreate,
    icon: 'home',
    exact: true,
    title: 'Product Category',
    visibleInSidebar: false,
    component: ProductCategoryCreatePage,
  },
  {
    path: historyRoutes.productCategoryUpdate,
    icon: 'home',
    exact: true,
    title: 'Product Category',
    visibleInSidebar: false,
    component: ProductCategoryUpdatePage,
  },
];

const productCategoryRoutes = {
  historyRoutes,
  menuRoutes,
  productCategoryRouteLinks,
};

export default productCategoryRoutes;
