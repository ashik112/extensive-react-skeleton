const baseURL = '/company';

const companyRouteLinks = {
  edit: (id) => `${baseURL}/edit/${id}`,
  show: (id) => `${baseURL}/show/${id}`,
  create: `${baseURL}/create`,
  list: `${baseURL}`,
};

export default companyRouteLinks;
