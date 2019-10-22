import {
  get, post, patch, remove,
} from '../../../services/apiService';
import { serverURL } from '../../../constants';
import { requisitionBaseURL } from '../constants';

export const requisitionApiRoutes = {
  requisitionList: `${requisitionBaseURL}/list`,
  requisition: (id) => `${requisitionBaseURL}/show/${id}`,
  requisitionCreate: `${requisitionBaseURL}/new`,
  requisitionUpdate: (id) => `${requisitionBaseURL}/update/${id}`,
  requisitionDelete: (id) => `${requisitionBaseURL}/delete/${id}`,
  requisitionChangeStatus: (id) => `${requisitionBaseURL}/change-status/${id}`,
};

const getRequisitionList = (dispatch) => get(`${serverURL}${requisitionApiRoutes.requisitionList}`, dispatch);
const getRequisition = (id, dispatch = () => {}) => get(`${serverURL}${requisitionApiRoutes.requisition(id)}`, dispatch);
const updateRequisition = (id, param, dispatch) => patch(`${serverURL}${requisitionApiRoutes.requisitionUpdate(id)}`, param, dispatch);
const deleteRequisition = (id, dispatch) => remove(`${serverURL}${requisitionApiRoutes.requisitionDelete(id)}`, dispatch);
const createRequisition = (param, dispatch) => post(`${serverURL}${requisitionApiRoutes.requisitionCreate}`, param, dispatch);

const requisitionApiService = {
  requisitionApiRoutes,
  getRequisitionList,
  getRequisition,
  updateRequisition,
  deleteRequisition,
  createRequisition,
};

export default requisitionApiService;
