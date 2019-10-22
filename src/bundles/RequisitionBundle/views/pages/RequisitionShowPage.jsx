/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Descriptions, Tag,
} from 'antd';
import unitApiService, { unitApiRoutes } from '../../apiServices/unitApiService';
import Card from '../../../../components/Card/Card';
import CardHeader from '../../../../components/Card/CardHeader';
import unitRouteLinks from '../../routes/links';
import CardBody from '../../../../components/Card/CardBody';
import checkHttpError from '../../../../services/checkHttpError';
import CardActionButtons from '../../../../views/templates/CardActionButtons';

class RequisitionShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unit: {},
    };
  }

  componentDidMount() {
    const { match: { params }, dispatch } = this.props;
    unitApiService.getUnit(params.id, dispatch).then((res) => {
      this.setState({
        unit: res.data,
      });
    }).catch((err) => {
      checkHttpError(err, 1, 5, dispatch);
    });
  }

  render() {
    const { unit } = this.state;
    return (
      <Card>
        <CardHeader>
          <CardActionButtons
            title="Unit"
            entity={unit}
            linkRouteObject={unitRouteLinks}
            deleteApiRouteFunction={unitApiRoutes.unitDelete}
            update
            remove
          />
        </CardHeader>
        <CardBody>
          <Descriptions layout="vertical" size="small" bordered>
            <Descriptions.Item label="ID">{unit.id}</Descriptions.Item>
            <Descriptions.Item label="Name">{unit.name}</Descriptions.Item>
            <Descriptions.Item label="Short">{unit.short ? unit.short : <Tag color="red">Not Available</Tag>}</Descriptions.Item>
            <Descriptions.Item label="Conversion Factor">{unit.conversion_factor ? unit.conversion_factor : <Tag color="red">Not Available</Tag>}</Descriptions.Item>
            <Descriptions.Item label="Parent">{unit.parent ? (unit.parent && unit.parent.name) : <Tag color="red">Not Available</Tag>}</Descriptions.Item>
          </Descriptions>
        </CardBody>
      </Card>
    );
  }
}

export default connect()(RequisitionShowPage);
