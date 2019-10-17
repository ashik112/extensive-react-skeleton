import departmentActionTypes from '../actionTypes';
import departmentApiService from '../../apiServices/departmentApiService';
import checkHttpError from '../../../../services/checkHttpError';
import { showAlert } from '../../../../services/generalhelper';
import history from '../../../../services/history';
import departmentRouteLinks from '../../routes/links';

const deleteDepartmentBegin = () => ({
  type: departmentActionTypes.DEPARTMENT_DELETE_REQUEST,
});

const deleteDepartmentSuccess = (data) => ({
  type: departmentActionTypes.DEPARTMENT_DELETE_SUCCESS,
  payload: data,
});

const deleteDepartmentFailure = (error) => ({
  type: departmentActionTypes.DEPARTMENT_DELETE_FAILURE,
  payload: { error },
});

const deleteDepartment = (param) => async (dispatch) => {
  dispatch(deleteDepartmentBegin());
  await departmentApiService.deleteDepartment(param, dispatch)
    .then((res) => {
      const data = res.data !== null ? res.data : {};
      dispatch(deleteDepartmentSuccess(data));
      showAlert('success', 'Operation Successful!', 5);
      history.push(departmentRouteLinks.list);
    })
    .catch((err) => {
      checkHttpError(err, 2, 30, dispatch);
      dispatch(deleteDepartmentFailure(err));
    });
};

export default deleteDepartment;
