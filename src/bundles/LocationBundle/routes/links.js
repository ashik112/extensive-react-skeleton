import { locationBaseURL } from '../constants';

const locationRouteLinks = {
  edit: (id) => `${locationBaseURL}/edit/${id}`,
  show: (id) => `${locationBaseURL}/show/${id}`,
  create: `${locationBaseURL}/create`,
  list: `${locationBaseURL}`,
};

export default locationRouteLinks;
