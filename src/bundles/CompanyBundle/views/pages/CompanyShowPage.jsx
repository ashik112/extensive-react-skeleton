/* eslint-disable react/prop-types */
// ! Write code here
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button, Descriptions, Table, Tooltip,
} from 'antd';
import companyApiService from '../../apiServices/companyApiService';
import Card from '../../../../components/Card/Card';
import CardHeader from '../../../../components/Card/CardHeader';
import history from '../../../../services/history';
import companyRouteLinks from '../../routes/links';
import CardBody from '../../../../components/Card/CardBody';

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
    });
  }

  render() {
    const { company } = this.state;
    return (
      <Card>
        <CardHeader>
          <Button type="dashed"> Company </Button>
        </CardHeader>
        <CardBody>
          <Descriptions layout="vertical" size="small" bordered>
            <Descriptions.Item span={3} label="ID">{company.id}</Descriptions.Item>
            <Descriptions.Item span={3} label="Name">{company.name}</Descriptions.Item>
            <Descriptions.Item span={3} label="Address">{company.address ? company.address : 'N/A'}</Descriptions.Item>
          </Descriptions>
        </CardBody>
      </Card>
    );
  }
}

export default connect()(CompanyShowPage);
