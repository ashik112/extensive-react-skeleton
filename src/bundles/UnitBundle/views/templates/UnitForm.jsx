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
  short: yup.string(),
  parent: yup.number(),
});

export default function UnitForm({
  handleSubmit, loading, unit, list,
}) {
  console.log(unit)
  return (
    <div>
      <Formik
        initialValues={unit}
        enableReinitialize
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        validationSchema={validationSchema}
      >
        <Form>
          {
              unit && unit.id && (
              <Row gutter={8} style={{ margin: 10 }}>
                <Col span={3} style={{ textAlign: 'right', marginLeft: 5 }}>
                      ID:
                </Col>
                <Col span={20}>
                  {unit.id}
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
              Conversion Factor
            </Col>
            <Col span={20}>
              <Field
                name="conversionFactor"
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
                name="parent"
                showSearch
                optionFilterProp="name"
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                selectedValue={unit.parent || null}
                options={list}
                component={AntSelect}
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
    </div>
  );
}
