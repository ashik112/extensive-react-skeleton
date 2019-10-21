/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button, Descriptions, Divider, Tag,
} from 'antd';
import departmentApiService, { departmentApiRoutes } from '../../apiServices/departmentApiService';
import Card from '../../../../components/Card/Card';
import CardHeader from '../../../../components/Card/CardHeader';
import history from '../../../../services/history';
import departmentRouteLinks from '../../routes/links';
import CardBody from '../../../../components/Card/CardBody';
import checkHttpError from '../../../../services/checkHttpError';
import CardButtonDelete from '../../../../views/atoms/CardButtonDelete';
import { serverURL } from '../../../../constants';
import ButtonBack from '../../../../views/atoms/ButtonBack';

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
          <ButtonBack title="Department List" route={departmentRouteLinks.list} />
          {
            department && department.id && (
              <div style={{ float: 'right' }}>
                <Button
                  size="default"
                  type="primary"
                  className="button-color-daybreak"
                  icon="edit"
                  onClick={async () => {
                    try {
                      history.push(departmentRouteLinks.edit(department.id));
                    } catch (e) {
                      /* */
                    }
                  }}
                />
                <Divider type="vertical" />
                <CardButtonDelete url={`${serverURL}${departmentApiRoutes.departmentDelete(department.id)}`} route={departmentRouteLinks.list} />
              </div>
            )
          }
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
