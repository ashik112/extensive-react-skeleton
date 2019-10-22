import { companyBaseURL } from '../constants';

const companyRouteLinks = {
  edit: (id) => `${companyBaseURL}/edit/${id}`,
  show: (id) => `${companyBaseURL}/show/${id}`,
  create: `${companyBaseURL}/create`,
  list: `${companyBaseURL}`,
};

export default companyRouteLinks;
