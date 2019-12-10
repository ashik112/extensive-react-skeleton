import companyActionsTypes from './companyActionsTypes';

const fetchCompany = () => ({
  type: companyActionsTypes.FETCH,
});

const setCompany = (company) => ({
  type: companyActionsTypes.SET,
  payload: company,
});

const clearCompany = () => ({
  type: companyActionsTypes.CLEAR,
});

const set = (company) => async (dispatch) => {
  dispatch(setCompany(company));
};

const fetch = () => async (dispatch) => {
  dispatch(fetchCompany());
};

const clear = () => async (dispatch) => {
  dispatch(clearCompany());
};

const companyActions = {
  set,
  fetch,
  clear,
};

export default companyActions;
