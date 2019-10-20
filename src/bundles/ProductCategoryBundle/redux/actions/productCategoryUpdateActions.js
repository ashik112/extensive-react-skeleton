import productCategoryActionTypes from '../actionTypes';
import productCategoryApiService from '../../apiServices/productCategoryApiService';
import checkHttpError from '../../../../services/checkHttpError';
import { showAlert } from '../../../../services/generalhelper';
import history from '../../../../services/history';
import productCategoryRouteLinks from '../../routes/links';

const updateProductCategoryBegin = () => ({
  type: productCategoryActionTypes.PRODUCT_CATEGORY_UPDATE_REQUEST,
});

const updateProductCategorySuccess = (data) => ({
  type: productCategoryActionTypes.PRODUCT_CATEGORY_UPDATE_SUCCESS,
  payload: data,
});

const updateProductCategoryFailure = (error) => ({
  type: productCategoryActionTypes.PRODUCT_CATEGORY_UPDATE_FAILURE,
  payload: { error },
});

const updateProductCategory = (id, param) => async (dispatch) => {
  dispatch(updateProductCategoryBegin());
  await productCategoryApiService.updateProductCategory(id, param, dispatch)
    .then((res) => {
      const data = res.data !== null ? res.data : {};
      dispatch(updateProductCategorySuccess(data));
      showAlert('success', 'Operation Successful!', 5);
      history.push(productCategoryRouteLinks.show(data.id));
    })
    .catch((err) => {
      checkHttpError(err, 2, 30, dispatch);
      dispatch(updateProductCategoryFailure(err));
    });
};

export default updateProductCategory;
