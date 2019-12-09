/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Card,
  Descriptions, Tag,
} from 'antd';
import companyApiService from '../../apiServices/companyApiService';
import historyRoutes from '../../../../routes/historyRoutes';
import checkHttpError from '../../../../services/checkHttpError';
import CardActionButtons from '../../../../components/templates/CardActionButtons';
import {companyApiRoutes} from '../../../../routes/apiRoutes';

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
      <Card
        extra={[
          <CardActionButtons
            title="Company"
            update
            remove
            linkRouteObject={historyRoutes.company}
            deleteApiRouteFunction={companyApiRoutes.remove}
            entity={company}
          />,
        ]}
      >
        <Descriptions layout="vertical" size="small" bordered>
          <Descriptions.Item label="ID">{company.id}</Descriptions.Item>
          <Descriptions.Item label="Name">{company.name}</Descriptions.Item>
          <Descriptions.Item label="Address">{company.address ? company.address : <Tag color="red">Not Available</Tag>}</Descriptions.Item>
        </Descriptions>
      </Card>
    );
  }
}

export default connect()(CompanyShowPage);
