/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Row, Col, Result, Button,
} from 'antd';
import historyRoutes from '../../routes/historyRoutes';

export default function NotFound() {
  return (
    <Row>
      <Col md={24}>
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={(
            <Button type="primary">
              <Link to={historyRoutes.dashboard}>Go Back</Link>
            </Button>
          )}
        />
      </Col>
    </Row>
  );
}
