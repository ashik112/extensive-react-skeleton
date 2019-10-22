/* eslint-disable react/prop-types,react/jsx-props-no-spreading */
import React from 'react';
import {
  Row, Col, Divider,
} from 'antd';
import {
  Formik, Field, Form,
} from 'formik';
import * as yup from 'yup';
import ButtonSubmit from '../../../../views/atoms/ButtonSubmit';
import {
  AntDatePicker,
  AntSelect, AntTextArea,
} from '../../../../forms/FormikAntFields';
import {dateFormat} from '../../../../constants';

const validationSchema = yup.object().shape({
  date: yup.date().required('Required!'),
  description: yup.string().nullable(true),
  department: yup.number().nullable(true),
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
                Date:
            </Col>
            <Col span={20}>
              <Field
                name="date"
                format={[dateFormat, 'YYYY-MM-DD']} // ! first one will format & rest will be used for parsing
                component={AntDatePicker}
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
                component={AntTextArea}
              />
            </Col>
          </Row>
          <Row gutter={8} style={{ margin: 10 }}>
            <Col span={3} style={{ textAlign: 'right', marginLeft: 5 }}>
                Department:
            </Col>
            <Col span={20}>
              <Field
                showField="description"
                valueField="id"
                disabled={!list}
                name="department"
                showSearch
                optionFilterProp="name"
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                selectedValue={requisition.department || null}
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
