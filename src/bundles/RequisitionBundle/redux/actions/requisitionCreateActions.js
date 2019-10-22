import requisitionActionTypes from '../actionTypes';
import requisitionApiService from '../../apiServices/requisitionApiService';
import checkHttpError from '../../../../services/checkHttpError';
import { showAlert } from '../../../../services/generalhelper';
import history from '../../../../services/history';
import requisitionRouteLinks from '../../routes/links';

const createRequisitionBegin = () => ({
  type: requisitionActionTypes.REQUISITION_CREATE_REQUEST,
});

const createRequisitionSuccess = (data) => ({
  type: requisitionActionTypes.REQUISITION_CREATE_SUCCESS,
  payload: data,
});

const createRequisitionFailure = (error) => ({
  type: requisitionActionTypes.REQUISITION_CREATE_FAILURE,
  payload: { error },
});

const createRequisition = (param) => async (dispatch) => {
  dispatch(createRequisitionBegin());
  await requisitionApiService.createRequisition(param, dispatch)
    .then((res) => {
      const data = res.data !== null ? res.data : {};
      dispatch(createRequisitionSuccess(data));
      showAlert('success', 'Requisition creation successful!', 5);
      history.push(requisitionRouteLinks.show(data.id));
    })
    .catch((err) => {
      checkHttpError(err, 2, 30, dispatch);
      dispatch(createRequisitionFailure(err));
    });
};

export default createRequisition;
