import { supplierBaseURL } from '../constants';

const supplierRouteLinks = {
  edit: (id) => `${supplierBaseURL}/edit/${id}`,
  show: (id) => `${supplierBaseURL}/show/${id}`,
  create: `${supplierBaseURL}/create`,
  list: `${supplierBaseURL}`,
};

export default supplierRouteLinks;
