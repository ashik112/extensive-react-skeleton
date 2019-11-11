/* eslint-disable react/jsx-filename-extension,react/jsx-props-no-spreading */
import React from 'react';
import {
  Row, Col, Button, Calendar,
} from 'antd';
import Card from '../../../../components/Card/Card';
import CardBody from '../../../../components/Card/CardBody';
import CardHeader from '../../../../components/Card/CardHeader';

export default function DashboardPage() {
  return (
    <>
      <Row gutter={8}>
        {/* <Col span={24}>
          <Card>
            <CardHeader>
              <Button className="button-color-green" style={{ color: '#ffffff' }}>DASHBOARD</Button>
            </CardHeader>
            <CardBody>
              <Result
                status="success"
                title="Successfully Logged In!"
                subTitle="Thank you for using."
                extra={[]}
              />
            </CardBody>
          </Card>
        </Col> */}
        <Col span={24}>
          <Card>
            <CardHeader>
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
