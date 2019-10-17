/* eslint-disable react/jsx-filename-extension,react/jsx-props-no-spreading */
import React from 'react';
import {
  Row, Col, Result, Button, Calendar,
} from 'antd';
import Card from '../../../../components/Card/Card';
import CardBody from '../../../../components/Card/CardBody';
import CardHeader from '../../../../components/Card/CardHeader';

export default function DashboardPage() {
  return (
    <>
      <Row gutter={8}>
        <Col span={8}>
          <Card>
            <CardHeader>
              {' '}
              {/*color="info"*/}
              {/*Biznet Dashboard*/}
              <Button className="button-color-green" style={{ color: '#ffffff' }}>BIZNET DASHBOARD</Button>
            </CardHeader>
            <CardBody>
              <Result
                status="success"
                title="Successfully Logged In!"
                subTitle="Thank you for using Biznet."
                extra={[]}
              />
            </CardBody>
          </Card>
        </Col>
        <Col span={16}>
          <Card>
            <CardHeader>
              {' '}
              {/*color="info"*/}
              {/*Biznet Dashboard*/}
              <Button type="primary">Calender</Button>
            </CardHeader>
            <CardBody>
              <Calendar fullscreen={false} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}
