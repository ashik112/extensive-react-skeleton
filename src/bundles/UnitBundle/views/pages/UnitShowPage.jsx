/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button, Descriptions, Divider, Tag,
} from 'antd';
import unitApiService, { unitApiRoutes } from '../../apiServices/unitApiService';
import Card from '../../../../components/Card/Card';
import CardHeader from '../../../../components/Card/CardHeader';
import history from '../../../../services/history';
import unitRouteLinks from '../../routes/links';
import CardBody from '../../../../components/Card/CardBody';
import checkHttpError from '../../../../services/checkHttpError';
import CardButtonDelete from '../../../../views/atoms/CardButtonDelete';
import { serverURL } from '../../../../constants';

class UnitShowPage extends Component {
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
          <Button
            type="primary"
            icon="arrow-left"
            onClick={async () => {
              history.push(unitRouteLinks.list);
            }}
          >
              &nbsp;
              Unit List
          </Button>
          {
              unit && unit.id && (
              <div style={{ float: 'right' }}>
                <Button
                  size="default"
                  type="primary"
                  className="button-color-daybreak"
                  icon="edit"
                  onClick={async () => {
                    try {
                      history.push(unitRouteLinks.edit(unit.id));
                    } catch (e) {
                      /* */
                    }
                  }}
                />
                <Divider type="vertical" />
                <CardButtonDelete url={`${serverURL}${unitApiRoutes.unitDelete(unit.id)}`} route={unitRouteLinks.list} />
              </div>
              )
            }
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

export default connect()(UnitShowPage);
