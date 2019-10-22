import requisitionActionTypes from '../actionTypes';
import requisitionApiService from '../../apiServices/requisitionApiService';
import checkHttpError from '../../../../services/checkHttpError';
import { showAlert } from '../../../../services/generalhelper';
import history from '../../../../services/history';
import requisitionRouteLinks from '../../routes/links';

const deleteRequisitionBegin = () => ({
  type: requisitionActionTypes.REQUISITION_DELETE_REQUEST,
});

const deleteRequisitionSuccess = (data) => ({
  type: requisitionActionTypes.REQUISITION_DELETE_SUCCESS,
  payload: data,
});

const deleteRequisitionFailure = (error) => ({
  type: requisitionActionTypes.REQUISITION_DELETE_FAILURE,
  payload: { error },
});

const deleteRequisition = (param) => async (dispatch) => {
  dispatch(deleteRequisitionBegin());
  await requisitionApiService.deleteRequisition(param, dispatch)
    .then((res) => {
      const data = res.data !== null ? res.data : {};
      dispatch(deleteRequisitionSuccess(data));
      showAlert('success', 'Operation Successful!', 5);
      history.push(requisitionRouteLinks.list);
    })
    .catch((err) => {
      checkHttpError(err, 2, 30, dispatch);
      dispatch(deleteRequisitionFailure(err));
    });
};

export default deleteRequisition;
