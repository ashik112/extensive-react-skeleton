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
import {
  AntInput,
  AntInputNumber,
  AntSelect,
} from '../../../../forms/FormikAntFields';
import CardBody from '../../../../components/Card/CardBody';

const validationSchema = yup.object().shape({
  name: yup.string().required('Required!'),
  short: yup.string().required('Required!'),
  conversionFactor: yup.number().positive()
    .typeError('Not a number!')
    .min(0.001, 'Must be greater than 0.001!')
    .required('Required!'),
  parent: yup.number().nullable(true),
});

export default function RequisitionForm({
  handleSubmit, loading, requisition, list,
}) {
  return (
    <div>
      <Formik
        initialValues={requisition}
        enableReinitialize
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        validationSchema={validationSchema}
      >
        <Form>
          <Divider type="horizontal" />
          {
              requisition && requisition.id && (
              <Row gutter={8} style={{ margin: 10 }}>
                <Col span={3} style={{ textAlign: 'right', marginLeft: 5 }}>
                      ID:
                </Col>
                <Col span={20}>
                  {requisition.id}
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
                Short:
            </Col>
            <Col span={20}>
              <Field
                name="short"
                component={AntInput}
              />
            </Col>
          </Row>
          <Row gutter={8} style={{ margin: 10 }}>
            <Col span={3} style={{ textAlign: 'right', marginLeft: 5 }}>
              Conversion Factor:
            </Col>
            <Col span={20}>
              <Field
                min={0.001}
                step={0.001}
                name="conversionFactor"
                component={AntInputNumber}
              />
            </Col>
          </Row>
          <Row gutter={8} style={{ margin: 10 }}>
            <Col span={3} style={{ textAlign: 'right', marginLeft: 5 }}>
                Parent:
            </Col>
            <Col span={20}>
              <Field
                name="parent"
                showSearch
                optionFilterProp="name"
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                selectedValue={requisition.parent || null}
                options={list}
                component={AntSelect}
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
    </div>
  );
}
