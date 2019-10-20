/* eslint-disable react/prop-types,react/jsx-props-no-spreading */
import React from 'react';
import {
  Row, Col,
} from 'antd';
import {
  Formik, Field, Form,
} from 'formik';
import * as yup from 'yup';
import ButtonSubmit from '../../../../views/atoms/ButtonSubmit';
import { AntInput } from '../../../../forms/FormikAntFields';

const validationSchema = yup.object().shape({
  name: yup.string().required('Required!'),
  address: yup.string(),
});

export default function CompanyForm(handleSubmit, loading, company) {
  return (
    <>
      <Formik
        initialValues={company}
        enableReinitialize
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        validationSchema={validationSchema}
      >
        <Form>
          {
            company.id && (
              <Row gutter={8} style={{ margin: 10 }}>
                <Col span={3} style={{ textAlign: 'right', marginLeft: 5 }}>
                  ID:
                </Col>
                <Col span={20}>
                  {company.id}
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
              Address:
            </Col>
            <Col span={20}>
              <Field
                name="address"
                component={AntInput}
              />
            </Col>
          </Row>
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
