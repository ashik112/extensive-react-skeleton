/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Descriptions, Tag,
} from 'antd';
import departmentApiService, { departmentApiRoutes } from '../../apiServices/departmentApiService';
import Card from '../../../../components/Card/Card';
import CardHeader from '../../../../components/Card/CardHeader';
import departmentRouteLinks from '../../routes/links';
import CardBody from '../../../../components/Card/CardBody';
import checkHttpError from '../../../../services/checkHttpError';
import CardActionButtons from '../../../../views/templates/CardActionButtons';

class DepartmentShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      department: {},
    };
  }

  componentDidMount() {
    const { match: { params }, dispatch } = this.props;
    departmentApiService.getDepartment(params.id, dispatch).then((res) => {
      this.setState({
        department: res.data,
      });
    }).catch((err) => {
      checkHttpError(err, 1, 5, dispatch);
    });
  }

  render() {
    const { department } = this.state;
    return (
      <Card>
        <CardHeader>
          <CardActionButtons
            title="Department"
            entity={department}
            update
            remove
            linkRouteObject={departmentRouteLinks}
            deleteApiRouteFunction={departmentApiRoutes.departmentDelete}
          />
        </CardHeader>
        <CardBody>
          <Descriptions layout="vertical" size="small" bordered>
            <Descriptions.Item label="ID">{department.id}</Descriptions.Item>
            <Descriptions.Item label="Name">{department.name}</Descriptions.Item>
            <Descriptions.Item label="Description">{department.description ? department.description : <Tag color="red">Not Available</Tag>}</Descriptions.Item>
          </Descriptions>
        </CardBody>
      </Card>
    );
  }
}

export default connect()(DepartmentShowPage);
