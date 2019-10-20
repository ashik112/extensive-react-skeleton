/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button, Descriptions, Divider, Tag,
} from 'antd';
import supplierApiService, { supplierApiRoutes } from '../../apiServices/supplierApiService';
import Card from '../../../../components/Card/Card';
import CardHeader from '../../../../components/Card/CardHeader';
import history from '../../../../services/history';
import supplierRouteLinks from '../../routes/links';
import CardBody from '../../../../components/Card/CardBody';
import checkHttpError from '../../../../services/checkHttpError';
import CardButtonDelete from '../../../../views/atoms/CardButtonDelete';
import { serverURL } from '../../../../constants';

class SupplierShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      supplier: {},
    };
  }

  componentDidMount() {
    const { match: { params }, dispatch } = this.props;
    supplierApiService.getSupplier(params.id, dispatch).then((res) => {
      this.setState({
        supplier: res.data,
      });
    }).catch((err) => {
      checkHttpError(err, 1, 5, dispatch);
    });
  }

  render() {
    const { supplier } = this.state;
    return (
      <Card>
        <CardHeader>
          <Button
            type="primary"
            icon="arrow-left"
            onClick={async () => {
              history.push(supplierRouteLinks.list);
            }}
          >
            &nbsp;
            Supplier List
          </Button>
          {
            supplier && supplier.id && (
              <div style={{ float: 'right' }}>
                <Button
                  size="default"
                  type="primary"
                  className="button-color-daybreak"
                  icon="edit"
                  onClick={async () => {
                    try {
                      history.push(supplierRouteLinks.edit(supplier.id));
                    } catch (e) {
                      /* */
                    }
                  }}
                />
                <Divider type="vertical" />
                <CardButtonDelete url={`${serverURL}${supplierApiRoutes.supplierDelete(supplier.id)}`} route={supplierRouteLinks.list} />
              </div>
            )
          }
        </CardHeader>
        <CardBody>
          <Descriptions layout="vertical" size="small" bordered>
            <Descriptions.Item label="ID">{supplier.id}</Descriptions.Item>
            <Descriptions.Item label="Name">{supplier.name}</Descriptions.Item>
            <Descriptions.Item label="Code">{supplier.code}</Descriptions.Item>
            <Descriptions.Item label="Description">{supplier.description ? supplier.description : <Tag color="red">Not Available</Tag>}</Descriptions.Item>
          </Descriptions>
        </CardBody>
      </Card>
    );
  }
}

export default connect()(SupplierShowPage);