import {
  get, post, patch, remove,
} from '../../../services/apiService';
import { serverURL } from '../../../constants';
import { locationBaseURL } from '../constants';

export const locationApiRoutes = {
  locationList: `${locationBaseURL}/list`,
  location: (id) => `${locationBaseURL}/show/${id}`,
  locationCreate: `${locationBaseURL}/new`,
  locationUpdate: (id) => `${locationBaseURL}/update/${id}`,
  locationDelete: (id) => `${locationBaseURL}/delete/${id}`,
};

const getLocationList = (dispatch) => get(`${serverURL}${locationApiRoutes.locationList}`, dispatch);
const getLocation = (id, dispatch = () => {}) => get(`${serverURL}${locationApiRoutes.location(id)}`, dispatch);
const updateLocation = (id, param, dispatch) => patch(`${serverURL}${locationApiRoutes.locationUpdate(id)}`, param, dispatch);
const deleteLocation = (id, dispatch) => remove(`${serverURL}${locationApiRoutes.locationDelete(id)}`, dispatch);
const createLocation = (param, dispatch) => post(`${serverURL}${locationApiRoutes.locationCreate}`, param, dispatch);

const locationApiService = {
  locationApiRoutes,
  getLocationList,
  getLocation,
  updateLocation,
  deleteLocation,
  createLocation,
};

export default locationApiService;
