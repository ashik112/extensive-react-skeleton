import productCategoryActionTypes from '../actionTypes';
import productCategoryApiService from '../../apiServices/productCategoryApiService';
import checkHttpError from '../../../../services/checkHttpError';
import { showAlert } from '../../../../services/generalhelper';
import history from '../../../../services/history';
import productCategoryRouteLinks from '../../routes/links';

const deleteProductCategoryBegin = () => ({
  type: productCategoryActionTypes.PRODUCT_CATEGORY_DELETE_REQUEST,
});

const deleteProductCategorySuccess = (data) => ({
  type: productCategoryActionTypes.PRODUCT_CATEGORY_DELETE_SUCCESS,
  payload: data,
});

const deleteProductCategoryFailure = (error) => ({
  type: productCategoryActionTypes.PRODUCT_CATEGORY_DELETE_FAILURE,
  payload: { error },
});

const deleteProductCategory = (param) => async (dispatch) => {
  dispatch(deleteProductCategoryBegin());
  await productCategoryApiService.deleteProductCategory(param, dispatch)
    .then((res) => {
      const data = res.data !== null ? res.data : {};
      dispatch(deleteProductCategorySuccess(data));
      showAlert('success', 'Operation Successful!', 5);
      history.push(productCategoryRouteLinks.list);
    })
    .catch((err) => {
      checkHttpError(err, 2, 30, dispatch);
      dispatch(deleteProductCategoryFailure(err));
    });
};

export default deleteProductCategory;
