/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Descriptions, Tag,
} from 'antd';
import companyApiService, { companyApiRoutes } from '../../apiServices/companyApiService';
import Card from '../../../../components/Card/Card';
import CardHeader from '../../../../components/Card/CardHeader';
import companyRouteLinks from '../../routes/links';
import CardBody from '../../../../components/Card/CardBody';
import checkHttpError from '../../../../services/checkHttpError';
import CardActionButtons from '../../../../views/templates/CardActionButtons';

class CompanyShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: {},
    };
  }

  componentDidMount() {
    const { match: { params }, dispatch } = this.props;
    companyApiService.getCompany(params.id, dispatch).then((res) => {
      this.setState({
        company: res.data,
      });
    }).catch((err) => {
      checkHttpError(err, 1, 5, dispatch);
    });
  }

  render() {
    const { company } = this.state;
    return (
      <Card>
        <CardHeader>
          <CardActionButtons
            title="Company"
            update
            remove
            linkRouteObject={companyRouteLinks}
            deleteApiRouteFunction={companyApiRoutes.companyDelete}
            entity={company}
          />
        </CardHeader>
        <CardBody>
          <Descriptions layout="vertical" size="small" bordered>
            <Descriptions.Item label="ID">{company.id}</Descriptions.Item>
            <Descriptions.Item label="Name">{company.name}</Descriptions.Item>
            <Descriptions.Item label="Address">{company.address ? company.address : <Tag color="red">Not Available</Tag>}</Descriptions.Item>
          </Descriptions>
        </CardBody>
      </Card>
    );
  }
}

export default connect()(CompanyShowPage);
