/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Descriptions, Divider,
} from 'antd';
import Moment from 'react-moment';
import requisitionApiService, { requisitionApiRoutes } from '../../apiServices/requisitionApiService';
import Card from '../../../../components/Card/Card';
import CardHeader from '../../../../components/Card/CardHeader';
import requisitionRouteLinks from '../../routes/links';
import CardBody from '../../../../components/Card/CardBody';
import checkHttpError from '../../../../services/checkHttpError';
import CardActionButtons from '../../../../views/templates/CardActionButtons';
import { dateFormat } from '../../../../constants';
import RequisitionStatus from '../atoms/RequisitionStatus';
import PolarQuestion from '../../../../views/atoms/PolarQuestion';

class RequisitionShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requisition: {},
    };
  }

  componentDidMount() {
    const { match: { params }, dispatch } = this.props;
    requisitionApiService.getRequisition(params.id, dispatch).then((res) => {
      this.setState({
        requisition: res.data,
      });
    }).catch((err) => {
      checkHttpError(err, 1, 5, dispatch);
    });
  }

  render() {
    const { requisition } = this.state;
    return (
      <Card>
        <CardHeader>
          <CardActionButtons
            title="Requisition"
            entity={requisition}
            linkRouteObject={requisitionRouteLinks}
            deleteApiRouteFunction={requisitionApiRoutes.requisitionDelete}
            update
            remove
          />
        </CardHeader>
        <CardBody>
          <Divider type="horizontal" />
          <Descriptions layout="horizontal" size="small" bordered column={24}>
            <Descriptions.Item label="ID" span={24}>{requisition.id}</Descriptions.Item>
            <Descriptions.Item label="Date" span={24}><Moment format={dateFormat}>{requisition.date}</Moment></Descriptions.Item>
            <Descriptions.Item label="Status" span={24}>
              {requisition.requisition_status && <RequisitionStatus status={requisition.requisition_status} />}
            </Descriptions.Item>
            <Descriptions.Item label="Description" span={24}>{requisition.description}</Descriptions.Item>
            <Descriptions.Item label="Budgeted" span={8}><PolarQuestion answer={requisition.budgeted} /></Descriptions.Item>
            <Descriptions.Item label="LC" span={8}><PolarQuestion answer={requisition.lc} /></Descriptions.Item>
            <Descriptions.Item label="Institute" span={8}><PolarQuestion answer={requisition.institute} /></Descriptions.Item>
          </Descriptions>
          <Divider type="horizontal" />
        </CardBody>
      </Card>
    );
  }
}

export default connect()(RequisitionShowPage);
