import departmentActionTypes from '../actionTypes';
import departmentApiService from '../../apiServices/departmentApiService';
import checkHttpError from '../../../../services/checkHttpError';
import { showAlert } from '../../../../services/generalhelper';
import history from '../../../../services/history';
import departmentRouteLinks from '../../routes/links';

const updateDepartmentBegin = () => ({
  type: departmentActionTypes.DEPARTMENT_UPDATE_REQUEST,
});

const updateDepartmentSuccess = (data) => ({
  type: departmentActionTypes.DEPARTMENT_UPDATE_SUCCESS,
  payload: data,
});

const updateDepartmentFailure = (error) => ({
  type: departmentActionTypes.DEPARTMENT_UPDATE_FAILURE,
  payload: { error },
});

const updateDepartment = (id, param) => async (dispatch) => {
  dispatch(updateDepartmentBegin());
  await departmentApiService.updateDepartment(id, param, dispatch)
    .then((res) => {
      const data = res.data !== null ? res.data : {};
      dispatch(updateDepartmentSuccess(data));
      showAlert('success', 'Operation Successful!', 5);
      history.push(departmentRouteLinks.show(data.id));
    })
    .catch((err) => {
      checkHttpError(err, 2, 30, dispatch);
      dispatch(updateDepartmentFailure(err));
    });
};

export default updateDepartment;
