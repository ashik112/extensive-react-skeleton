/* eslint-disable react/prop-types,react/jsx-props-no-spreading */
import React, { Component } from 'react';
import {
  Input, Row, Col,
} from 'antd';
import {
  Formik, getIn, Field, Form,
} from 'formik';
import * as yup from 'yup';
import ButtonSubmit from '../../../../views/atoms/ButtonSubmit';

const validationSchema = yup.object().shape({
  name: yup.string().required('Required!'),
  address: yup.string().required('Required!'),
});

export default class CompanyForm extends Component {
  TextInput = ({ field, form, ...props }) => {
    // eslint-disable-next-line no-unused-vars
    const { values, errors, setFieldValue } = form;
    const errorMessage = getIn(errors, field.name);
    return (
      <>
        <Input
          {...props}
          autoComplete="off"
          /* eslint-disable-next-line react/jsx-props-no-spreading */
          {...field}
          onChange={(e) => {
            setFieldValue(field.name, e.target.value);
          }}
        />
        {errorMessage && <div style={{ color: 'red', fontSize: '0.7em' }}>{errorMessage}</div>}
      </>
    );
  };

  render() {
    const { handleSubmit, loading, company } = this.props;
    return (
      <div>
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
                  <Col span={2} style={{ textAlign: 'right', marginLeft: 5 }}>
                    Id:
                  </Col>
                  <Col span={20}>
                    {company.id}
                  </Col>
                </Row>
              )
            }
            <Row gutter={8} style={{ margin: 10 }}>
              <Col span={2} style={{ textAlign: 'right', marginLeft: 5 }}>
                Name:
              </Col>
              <Col span={20}>
                <Field
                  name="name"
                  component={this.TextInput}
                />
              </Col>
            </Row>
            <Row gutter={8} style={{ margin: 10 }}>
              <Col span={2} style={{ textAlign: 'right', marginLeft: 5 }}>
                Address:
              </Col>
              <Col span={20}>
                <Field
                  name="address"
                  component={this.TextInput}
                />
              </Col>
            </Row>
            <Row>
              <Col style={{ float: 'right' }}>
                <ButtonSubmit loading={loading} />
              </Col>
            </Row>
          </Form>
        </Formik>
      </div>
    );
  }
}
