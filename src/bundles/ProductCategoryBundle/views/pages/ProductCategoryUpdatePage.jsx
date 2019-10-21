import React, { Component } from 'react';
import {
  Form, Spin, Empty, Button, Divider,
} from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProductCategoryForm from '../templates/ProductCategoryForm';
import productCategoryActions from '../../redux/actions';
import notificationActions from '../../../../redux/actions/notificationActions';
import productCategoryApiService, { productCategoryApiRoutes } from '../../apiServices/productCategoryApiService';
import CardHeader from '../../../../components/Card/CardHeader';
import history from '../../../../services/history';
import productCategoryRouteLinks from '../../routes/links';
import CardBody from '../../../../components/Card/CardBody';
import Card from '../../../../components/Card/Card';
import CardButtonDelete from '../../../../views/atoms/CardButtonDelete';
import { serverURL } from '../../../../constants';


class ProductCategoryUpdatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productCategory: null,
    };
  }

  componentDidMount() {
    try {
      const { match, dispatch, getList } = this.props;
      const { params } = match;
      if (params) {
        getList();
        productCategoryApiService.getProductCategory(params.id, dispatch).then((res) => {
          this.setState({
            productCategory: res.data,
          });
        });
      }
    } catch (e) {
      /* */
    }
  }

  componentWillUnmount() {
    const { clearStore, clearNotifications } = this.props;
    clearStore();
    clearNotifications();
  }

  handleSubmit = (params) => {
    const { updateProductCategory } = this.props;
    const { productCategory } = this.state;
    updateProductCategory(productCategory.id, params);
  };

  render() {
    const { loading, list } = this.props;
    const { productCategory } = this.state;
    const initialValue = (
      productCategory
        && productCategory.id
        && {
          id: productCategory.id,
          name: productCategory.name,
          description: productCategory.description,
          parent: (productCategory.parent && productCategory.parent.id) || null,
        }) || null;
    return (
      <Spin spinning={loading}>
        <Card>
          <CardHeader>
            <Button
              tabIndex={-1}
              type="primary"
              icon="arrow-left"
              onClick={async () => {
                history.push(productCategoryRouteLinks.list);
              }}
            >
              <span>
                &nbsp;
                ProductCategory List
              </span>
            </Button>
            {
              productCategory && productCategory.id && (
                <div style={{ float: 'right' }}>
                  <Button
                    tabIndex={-1}
                    size="default"
                    type="primary"
                    className="button-color-daybreak"
                    icon="eye"
                    onClick={async () => {
                      try {
                        history.push(productCategoryRouteLinks.show(productCategory.id));
                      } catch (e) {
                        /* */
                      }
                    }}
                  />
                  <Divider type="vertical" />
                  <CardButtonDelete url={`${serverURL}${productCategoryApiRoutes.productCategoryDelete(productCategory.id)}`} route={productCategoryRouteLinks.list} />
                </div>
              )
            }
          </CardHeader>
          <CardBody>
            {productCategory && <WrappedProductCategoryForm list={list} productCategory={initialValue} handleSubmit={this.handleSubmit} />}
            {!productCategory && <Empty />}
          </CardBody>
        </Card>
      </Spin>
    );
  }
}


ProductCategoryUpdatePage.defaultProps = {
  loading: false,
  list: [],
  updateProductCategory: () => {},
  dispatch: () => {},
  clearStore: () => {},
  clearNotifications: () => {},
  match: {
    param: null,
  },
  getList: () => { },
};

ProductCategoryUpdatePage.propTypes = {
  loading: PropTypes.bool,
  list: PropTypes.arrayOf(PropTypes.shape([])),
  updateProductCategory: PropTypes.func,
  dispatch: PropTypes.func,
  clearStore: PropTypes.func,
  clearNotifications: PropTypes.func,
  match: PropTypes.shape(),
  getList: PropTypes.func,
};

const mapStateToProps = (state) => ({
  loading: state.productCategoryReducer.loading,
  list: state.productCategoryReducer.list,
});

const mapDispatchToProps = (dispatch) => ({
  updateProductCategory: (id, param) => dispatch(
    productCategoryActions.updateProductCategory(id, param),
  ),
  clearStore: () => dispatch(
    productCategoryActions.clearProductCategoryStore(),
  ),
  clearNotifications: () => dispatch(
    notificationActions.closeAll(),
  ),
  getList: () => dispatch(
    productCategoryActions.fetchProductCategoryList(),
  ),
});
const WrappedProductCategoryForm = Form.create({ name: 'product_category_update' })(ProductCategoryForm);
export default connect(mapStateToProps, mapDispatchToProps)(ProductCategoryUpdatePage);
