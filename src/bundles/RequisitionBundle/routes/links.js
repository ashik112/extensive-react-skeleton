import { requisitionBaseURL } from '../constants';

const requisitionRouteLinks = {
  edit: (id) => `${requisitionBaseURL}/edit/${id}`,
  show: (id) => `${requisitionBaseURL}/show/${id}`,
  create: `${requisitionBaseURL}/create`,
  list: `${requisitionBaseURL}`,
};

export default requisitionRouteLinks;
