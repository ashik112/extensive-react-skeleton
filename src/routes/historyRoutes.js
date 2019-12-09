/**
 * * Routes for history
 */
const historyRoutes = {
  dashboard: '/dashboard',
  login: '/',
  company: {
    base: '/company',
    list: '/company',
    show: (id) => (id ? `/company/show/${id}` : '/company/show/:id'),
    edit: (id) => (id ? `/company/edit/${id}` : '/company/edit/:id'),
    create: '/company/create',
  },
};

export default historyRoutes;
