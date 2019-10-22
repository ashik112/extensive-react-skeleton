// eslint-disable-next-line import/no-cycle
import ProductCategoryListPage from '../views/pages/ProductCategoryListPage';
import ProductCategoryShowPage from '../views/pages/ProductCategoryShowPage';
import ProductCategoryCreatePage from '../views/pages/ProductCategoryCreatePage';
import ProductCategoryUpdatePage from '../views/pages/ProductCategoryUpdatePage';
import { productCategoryBaseURL } from '../constants';

const historyRoutes = {
  productCategoryList: `${productCategoryBaseURL}`, // * List should be same as productCategoryBaseURL for sidebar hightlight
  productCategoryShow: `${productCategoryBaseURL}/show/:id`,
  productCategoryCreate: `${productCategoryBaseURL}/create`,
  productCategoryUpdate: `${productCategoryBaseURL}/edit/:id`,
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
};

export default productCategoryRoutes;
