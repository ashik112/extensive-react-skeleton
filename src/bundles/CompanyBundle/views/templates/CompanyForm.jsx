/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import {
  Input, Row, Col, Button,
} from 'antd';
import {
  Formik, getIn, Field, Form,
} from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup.string().required('Required!'),
  address: yup.string().required('Required!'),
});

export default class CompanyForm extends Component {
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
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      </>
    );
  };

  render() {
    return (
      <div>
        <Formik
          initialValues={{
            name: '',
            address: '',
          }}
          onSubmit={(values) => {
            console.log(values);
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
            <div>
              <Button
                loading={false}
                disabled={false}
                style={{ marginTop: 10 }}
                type="submit"
                htmlType="submit"
              >
                Submit
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    );
  }
}
