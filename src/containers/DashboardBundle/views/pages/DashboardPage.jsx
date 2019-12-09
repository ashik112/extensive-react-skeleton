/* eslint-disable react/jsx-filename-extension,react/jsx-props-no-spreading */
import React from 'react';
import {
  Row, Col, Calendar, Card,
} from 'antd';

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
          <Card
            title="Calendar"
          >
            <Calendar fullscreen={false} />
          </Card>
        </Col>
      </Row>
    </>
  );
}
