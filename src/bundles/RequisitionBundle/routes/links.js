import { requisitionBaseURL } from '../constants';

const productCategoryRouteLinks = {
  edit: (id) => `${requisitionBaseURL}/edit/${id}`,
  show: (id) => `${requisitionBaseURL}/show/${id}`,
  create: `${requisitionBaseURL}/create`,
  list: `${requisitionBaseURL}`,
};

export default productCategoryRouteLinks;
