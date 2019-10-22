import { productCategoryBaseURL } from '../constants';

const productCategoryRouteLinks = {
  edit: (id) => `${productCategoryBaseURL}/edit/${id}`,
  show: (id) => `${productCategoryBaseURL}/show/${id}`,
  create: `${productCategoryBaseURL}/create`,
  list: `${productCategoryBaseURL}`,
};

export default productCategoryRouteLinks;
