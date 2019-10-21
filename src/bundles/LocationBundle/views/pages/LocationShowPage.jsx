/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Descriptions, Tag,
} from 'antd';
import locationApiService, { locationApiRoutes } from '../../apiServices/locationApiService';
import Card from '../../../../components/Card/Card';
import CardHeader from '../../../../components/Card/CardHeader';
import locationRouteLinks from '../../routes/links';
import CardBody from '../../../../components/Card/CardBody';
import checkHttpError from '../../../../services/checkHttpError';
import CardActionButtons from '../../../../views/templates/CardActionButtons';

class LocationShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
    };
  }

  componentDidMount() {
    const { match: { params }, dispatch } = this.props;
    locationApiService.getLocation(params.id, dispatch).then((res) => {
      this.setState({
        location: res.data,
      });
    }).catch((err) => {
      checkHttpError(err, 1, 5, dispatch);
    });
  }

  render() {
    const { location } = this.state;
    return (
      <Card>
        <CardHeader>
          <CardActionButtons
            title="Location"
            entity={location}
            linkRouteObject={locationRouteLinks}
            deleteApiRouteFunction={locationApiRoutes.locationDelete}
            update
            remove
          />
        </CardHeader>
        <CardBody>
          <Descriptions layout="vertical" size="small" bordered>
            <Descriptions.Item label="ID">{location.id}</Descriptions.Item>
            <Descriptions.Item label="Name">{location.name}</Descriptions.Item>
            <Descriptions.Item label="Description">{location.description ? location.description : <Tag color="red">Not Available</Tag>}</Descriptions.Item>
            <Descriptions.Item label="Parent">{location.parent ? (location.parent && location.parent.name) : <Tag color="red">Not Available</Tag>}</Descriptions.Item>
          </Descriptions>
        </CardBody>
      </Card>
    );
  }
}

export default connect()(LocationShowPage);
