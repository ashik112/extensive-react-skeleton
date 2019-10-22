/* eslint-disable react/prop-types,react/jsx-props-no-spreading */
import React from 'react';
import {
  Row, Col, Descriptions, Divider,
} from 'antd';
import {
  Formik, Field, Form,
} from 'formik';
import * as yup from 'yup';
import ButtonSubmit from '../../../../views/atoms/ButtonSubmit';
import { AntInput } from '../../../../forms/FormikAntFields';
import CardBody from '../../../../components/Card/CardBody';

const validationSchema = yup.object().shape({
  name: yup.string().required('Required!'),
  description: yup.string(),
});

export default function DepartmentForm({ handleSubmit, loading, department }) {
  return (
    <>
      <Formik
        initialValues={department}
        enableReinitialize
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        validationSchema={validationSchema}
      >
        <Form>
          <Divider type="horizontal" />
          {
            department.id && (
              <Row gutter={8} style={{ margin: 10 }}>
                <Col span={3} style={{ textAlign: 'right', marginLeft: 5 }}>
                  ID:
                </Col>
                <Col span={20}>
                  {department.id}
                </Col>
              </Row>
            )
          }
          <Row gutter={8} style={{ margin: 10 }}>
            <Col span={3} style={{ textAlign: 'right', marginLeft: 5 }}>
              Name:
            </Col>
            <Col span={20}>
              <Field
                name="name"
                component={AntInput}
              />
            </Col>
          </Row>
          <Row gutter={8} style={{ margin: 10 }}>
            <Col span={3} style={{ textAlign: 'right', marginLeft: 5 }}>
              Description:
            </Col>
            <Col span={20}>
              <Field
                name="description"
                component={AntInput}
              />
            </Col>
          </Row>
          <Divider type="horizontal" />
          <Row gutter={8} style={{ margin: 10 }}>
            <Col span={3} style={{ textAlign: 'right', marginLeft: 5 }} />
            <Col span={20}>
              <ButtonSubmit loading={loading} />
            </Col>
          </Row>
        </Form>
      </Formik>
    </>
  );
}
