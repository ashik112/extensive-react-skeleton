/* eslint-disable react/prop-types,react/jsx-props-no-spreading */
import React from 'react';
import { getIn } from 'formik';
import {Input, InputNumber, Select} from 'antd';

const { Option } = Select;

export const AntInput = ({ field, form, ...props }) => {
  // eslint-disable-next-line no-unused-vars
  const { values, errors, setFieldValue } = form;
  const errorMessage = getIn(errors, field.name);
  return (
    <>
      <Input
        size="small"
        allowClear
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

export const AntSelect = ({ field, form, ...props }) => {
  // eslint-disable-next-line no-unused-vars
  const { values, errors, setFieldValue } = form;
  const { options, selectedValue } = props;
  const errorMessage = getIn(errors, field.name);
  return (
    <>
      <Select
        size="small"
        {...props}
        allowClear
        defaultValue={selectedValue || null}
        style={{ width: '100%' }}
        onChange={(value) => {
          setFieldValue(field.name, value);
        }}
      >
        {options
        && options.map((item) => <Option value={item.id} key={item.id}>{item.name}</Option>)}
      </Select>
      {errorMessage
      && <div style={{ color: 'red', fontSize: '0.7em' }}>{errorMessage}</div>}
    </>
  );
};

export const AntInputNumber = ({ field, form, ...props }) => {
  // eslint-disable-next-line no-unused-vars
  const { values, errors, setFieldValue } = form;
  const errorMessage = getIn(errors, field.name);
  return (
    <>
      <InputNumber
        size="small"
        style={{ width: '100%' }}
        {...props}
        autoComplete="off"
        /* eslint-disable-next-line react/jsx-props-no-spreading */
        {...field}
        onChange={(e) => {
          setFieldValue(field.name, e);
        }}
      />
      {errorMessage && <div style={{ color: 'red', fontSize: '0.7em' }}>{errorMessage}</div>}
    </>
  );
};
