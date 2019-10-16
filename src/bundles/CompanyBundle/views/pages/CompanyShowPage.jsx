/* eslint-disable react/prop-types */
// ! Write code here
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button, Descriptions, Divider, Table, Tooltip,
} from 'antd';
import companyApiService from '../../apiServices/companyApiService';
import Card from '../../../../components/Card/Card';
import CardHeader from '../../../../components/Card/CardHeader';
import history from '../../../../services/history';
import companyRouteLinks from '../../routes/links';
import CardBody from '../../../../components/Card/CardBody';
import checkHttpError from '../../../../services/checkHttpError';

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
          <Button
            type="primary"
            icon="arrow-left"
            onClick={async () => {
              history.push(companyRouteLinks.list);
            }}
          >
            &nbsp;
            Company List
          </Button>
          <div style={{ float: 'right' }}>
            <Button
              size="default"
              type="primary"
              className="button-color-daybreak"
              icon="edit"
              onClick={async () => {
                history.push(companyRouteLinks.edit(company.id));
              }}
            />
            <Divider type="vertical" />
            <Button
              size="default"
              type="danger"
              icon="delete"
            />
          </div>
        </CardHeader>
        <CardBody>
          <Descriptions layout="horizontal" size="small" bordered>
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
