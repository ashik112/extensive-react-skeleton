/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Descriptions, Divider, Tag,
} from 'antd';
import productCategoryApiService, { productCategoryApiRoutes } from '../../apiServices/productCategoryApiService';
import Card from '../../../../components/Card/Card';
import CardHeader from '../../../../components/Card/CardHeader';
import productCategoryRouteLinks from '../../routes/links';
import CardBody from '../../../../components/Card/CardBody';
import checkHttpError from '../../../../services/checkHttpError';
import CardButtonDelete from '../../../../views/atoms/CardButtonDelete';
import { serverURL } from '../../../../constants';
import ButtonBack from '../../../../views/atoms/ButtonBack';
import CardButtonEdit from '../../../../views/atoms/CardButtonEdit';

class ProductCategoryShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productCategory: {},
    };
  }

  componentDidMount() {
    const { match: { params }, dispatch } = this.props;
    productCategoryApiService.getProductCategory(params.id, dispatch).then((res) => {
      this.setState({
        productCategory: res.data,
      });
    }).catch((err) => {
      checkHttpError(err, 1, 5, dispatch);
    });
  }

  render() {
    const { productCategory } = this.state;
    return (
      <Card>
        <CardHeader>
          <ButtonBack title="Product Category List" route={productCategoryRouteLinks.list} />
          {
            productCategory && productCategory.id && (
              <div style={{ float: 'right' }}>
                <CardButtonEdit route={productCategoryRouteLinks.edit(productCategory.id)} />
                <Divider type="vertical" />
                <CardButtonDelete url={`${serverURL}${productCategoryApiRoutes.productCategoryDelete(productCategory.id)}`} route={productCategoryRouteLinks.list} />
              </div>
            )
          }
        </CardHeader>
        <CardBody>
          <Descriptions layout="vertical" size="small" bordered>
            <Descriptions.Item label="ID">{productCategory.id}</Descriptions.Item>
            <Descriptions.Item label="Name">{productCategory.name}</Descriptions.Item>
            <Descriptions.Item label="Description">{productCategory.description ? productCategory.description : <Tag color="red">Not Available</Tag>}</Descriptions.Item>
            <Descriptions.Item label="Parent">{productCategory.parent ? (productCategory.parent && productCategory.parent.name) : <Tag color="red">Not Available</Tag>}</Descriptions.Item>
          </Descriptions>
        </CardBody>
      </Card>
    );
  }
}

export default connect()(ProductCategoryShowPage);
