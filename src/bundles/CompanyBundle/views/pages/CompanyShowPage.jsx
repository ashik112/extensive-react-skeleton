/* eslint-disable react/prop-types */
// ! Write code here
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button, Descriptions, Divider,
} from 'antd';
import companyApiService, { companyApiRoutes } from '../../apiServices/companyApiService';
import Card from '../../../../components/Card/Card';
import CardHeader from '../../../../components/Card/CardHeader';
import history from '../../../../services/history';
import companyRouteLinks from '../../routes/links';
import CardBody from '../../../../components/Card/CardBody';
import checkHttpError from '../../../../services/checkHttpError';
import CardButtonDelete from '../../../../views/atoms/CardButtonDelete';
import { serverURL } from '../../../../constants';

class CompanyShowPage extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
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

  handleDelete =() => {
    console.log('delete');
  };

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
                try {
                  history.push(companyRouteLinks.edit(company.id));
                } catch (e) {
                  /* */
                }
              }}
            />
            <Divider type="vertical" />
            <CardButtonDelete url={`${serverURL}${companyApiRoutes.companyDelete(company.id)}`} route={companyRouteLinks.list} />
          </div>
        </CardHeader>
        <CardBody>
          <Descriptions layout="vertical" size="small" bordered>
            <Descriptions.Item label="ID">{company.id}</Descriptions.Item>
            <Descriptions.Item label="Name">{company.name}</Descriptions.Item>
            <Descriptions.Item label="Address">{company.address ? company.address : 'N/A'}</Descriptions.Item>
          </Descriptions>
        </CardBody>
      </Card>
    );
  }
}

export default connect()(CompanyShowPage);
