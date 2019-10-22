import { unitBaseURL } from '../constants';

export const unitRouteLinks = {
  edit: (id) => `${unitBaseURL}/edit/${id}`,
  show: (id) => `${unitBaseURL}/show/${id}`,
  create: `${unitBaseURL}/create`,
  list: `${unitBaseURL}`,
};

export default unitRouteLinks;
