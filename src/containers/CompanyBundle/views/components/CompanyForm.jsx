/* eslint-disable react/prop-types,react/jsx-props-no-spreading */
import React from 'react';
import {
  Row, Col, Form, Icon,
} from 'antd';
import {
  Formik, Field,
} from 'formik';
import * as yup from 'yup';
import ButtonSubmit from '../../../../components/atoms/ButtonSubmit';
import { AntInput } from '../../../../components/forms/FormikAntFields';
import {
  antFormItemLayout,
  antTailFormItemLayout,
} from '../../../../constants/fromLayout';

const validationSchema = yup.object().shape({
  name: yup.string().required('Required!'),
  address: yup.string(),
});

export default function CompanyForm({ submit, loading, company }) {
  return (
    <>
      <Formik
        initialValues={company}
        enableReinitialize
        onSubmit={(values) => {
          submit(values);
        }}
        validationSchema={validationSchema}
      >
        {({
          // values,
          // errors,
          // touched,
          // handleChange,
          // handleBlur,
          handleSubmit,
          // isSubmitting,
        }) => (
          <Form {...antFormItemLayout} onSubmit={handleSubmit}>
            {
              company && company.id && (
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
            <Form.Item label="Name">
              <Field
                name="name"
                component={AntInput}
              />
            </Form.Item>
            <Form.Item label="Address">
              <Field
                name="address"
                component={AntInput}
              />
            </Form.Item>
            <Form.Item {...antTailFormItemLayout}>
              <ButtonSubmit loading={loading}>
                {/* eslint-disable-next-line */}
                <Icon type="save" /> Save
              </ButtonSubmit>
            </Form.Item>
          </Form>
        )}
      </Formik>
    </>
  );
}
