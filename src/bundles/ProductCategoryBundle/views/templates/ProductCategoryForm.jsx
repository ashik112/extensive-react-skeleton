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
import { AntInput, AntSelect } from '../../../../forms/FormikAntFields';

const validationSchema = yup.object().shape({
  name: yup.string().required('Required!'),
  description: yup.string().nullable(true),
  parent: yup.number().nullable(true),
});

export default function ProductCategoryForm({
  handleSubmit, loading, productCategory, list,
}) {
  return (
    <>
      <Formik
        initialValues={productCategory}
        enableReinitialize
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        validationSchema={validationSchema}
      >
        <Form>
          {
            productCategory && productCategory.id && (
              <Row gutter={8} style={{ margin: 10 }}>
                <Col span={3} style={{ textAlign: 'right', marginLeft: 5 }}>
                  ID:
                </Col>
                <Col span={20}>
                  {productCategory.id}
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
                tabIndex={0}
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
                tabIndex={0}
                name="description"
                component={AntInput}
              />
            </Col>
          </Row>
          <Row gutter={8} style={{ margin: 10 }}>
            <Col span={3} style={{ textAlign: 'right', marginLeft: 5 }}>
              Parent:
            </Col>
            <Col span={20}>
              <Field
                tabIndex={0}
                name="parent"
                showSearch
                optionFilterProp="name"
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                selectedValue={productCategory.parent || null}
                options={list}
                component={AntSelect}
              />
            </Col>
          </Row>
          <Row gutter={8} style={{ margin: 10 }}>
            <Col span={3} style={{ textAlign: 'right', marginLeft: 5 }} />
            <Col span={20}>
              <ButtonSubmit
                tabIndex={0}
                loading={loading}
              />
            </Col>
          </Row>
        </Form>
      </Formik>
    </>
  );
}