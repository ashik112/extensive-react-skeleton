/* eslint-disable react/prop-types,react/jsx-props-no-spreading */
import React from 'react';
import { getIn } from 'formik';
import {Input, InputNumber, Select, Tooltip} from 'antd';

const { Option } = Select;

export const AntInput = ({ field, form, ...props }) => {
  // eslint-disable-next-line no-unused-vars
  const { values, errors, setFieldValue } = form;
  const errorMessage = getIn(errors, field.name);
  const errorExist = errorMessage !== '' && errorMessage !== undefined;
  return (
    <>
      <Tooltip
        visible={errorExist}
        destroyTooltipOnHide
        title={errorExist && errorMessage}
        placement="topRight"
      >
        <Input
          className={(errorMessage && 'form-field-error') || ''}
          allowClear
          {...props}
          autoComplete="off"
          /* eslint-disable-next-line react/jsx-props-no-spreading */
          {...field}
          onChange={(e) => {
            setFieldValue(field.name, e.target.value);
          }}
        />
      </Tooltip>
      {/*{errorMessage && <div style={{ color: 'red', fontSize: '0.7em' }}>{errorMessage}</div>}*/}
    </>
  );
};

export const AntSelect = ({ field, form, ...props }) => {
  // eslint-disable-next-line no-unused-vars
  const { values, errors, setFieldValue } = form;
  const { options, selectedValue } = props;
  const errorMessage = getIn(errors, field.name);
  const errorExist = errorMessage !== '' && errorMessage !== undefined;
  return (
    <>
      <Tooltip
        visible={errorExist}
        destroyTooltipOnHide
        title={errorExist && errorMessage}
        placement="topRight"
      >
        <Select
          className={(errorMessage && 'form-field-error') || ''}
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
      </Tooltip>
      {/*{errorMessage
      && <div style={{ color: 'red', fontSize: '0.7em' }}>{errorMessage}</div>}*/}
    </>
  );
};

export const AntInputNumber = ({ field, form, ...props }) => {
  // eslint-disable-next-line no-unused-vars
  const { values, errors, setFieldValue } = form;
  const errorMessage = getIn(errors, field.name);
  const errorExist = errorMessage !== '' && errorMessage !== undefined;
  return (
    <>
      <Tooltip
        visible={errorExist}
        destroyTooltipOnHide
        title={errorExist && errorMessage}
        placement="topRight"
      >
        <InputNumber
          className={(errorMessage && 'form-field-error') || ''}
          style={{ width: '100%' }}
          {...props}
          autoComplete="off"
          /* eslint-disable-next-line react/jsx-props-no-spreading */
          {...field}
          onChange={(e) => {
            setFieldValue(field.name, e);
          }}
        />
      </Tooltip>
      {/*{errorMessage && <div style={{ color: 'red', fontSize: '0.7em' }}>{errorMessage}</div>}*/}
    </>
  );
};
