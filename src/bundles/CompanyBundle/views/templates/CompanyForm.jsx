/* eslint-disable react/prop-types */
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
  // eslint-disable-next-line no-unused-vars
  TextInput = ({ field, form: { values, errors, setFieldValue } }) => {
    const errorMessage = getIn(errors, field.name);
    return (
      <>
        <Input
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
    const { handleSubmit, loading } = this.props;
    return (
      <div>
        <Formik
          enableReinitialize
          onSubmit={(values) => {
            handleSubmit(values);
            // console.log(values);
          }}
          validationSchema={validationSchema}
        >
          <Form>
            <Row style={{ margin: 10 }}>
              <Col span={2} style={{ textAlign: 'right', margin: 5 }}>
                Name:
              </Col>
              <Col span={16}>
                <Field
                  name="name"
                  component={this.TextInput}
                />
              </Col>
            </Row>
            <Row style={{ margin: 10 }}>
              <Col span={2} style={{ textAlign: 'right', margin: 5 }}>
                Address:
              </Col>
              <Col span={16}>
                <Field
                  name="address"
                  component={this.TextInput}
                />
              </Col>
            </Row>
            <ButtonSubmit loading={loading} />
          </Form>
        </Formik>
      </div>
    );
  }
}
