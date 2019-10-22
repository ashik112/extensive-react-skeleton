import { departmentBaseURL } from '../constants';

const departmentRouteLinks = {
  edit: (id) => `${departmentBaseURL}/edit/${id}`,
  show: (id) => `${departmentBaseURL}/show/${id}`,
  create: `${departmentBaseURL}/create`,
  list: `${departmentBaseURL}`,
};

export default departmentRouteLinks;
