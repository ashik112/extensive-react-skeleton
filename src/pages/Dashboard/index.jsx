/* eslint-disable react/jsx-filename-extension,react/jsx-props-no-spreading */
import React from 'react';
import {
  Row, Col,
} from 'antd';
import Card from '../../components/Card/Card';
import CardBody from '../../components/Card/CardBody';
import CardHeader from '../../components/Card/CardHeader';

export default function DashboardPage() {
  return (
    <>
      <Row gutter={8}>
        <Col span={12}>
          <Card>
            <CardHeader color="danger">
              Biznet Dashboard
            </CardHeader>
            <CardBody>
              Welcome!
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}
