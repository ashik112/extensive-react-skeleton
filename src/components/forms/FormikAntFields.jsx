/* eslint-disable react/prop-types,react/jsx-props-no-spreading */
import React from 'react';
import { getIn } from 'formik';
import {
  Input, InputNumber, Select, Tooltip, DatePicker,
} from 'antd';

const { TextArea } = Input;
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

export const AntTextArea = ({ field, form, ...props }) => {
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
        <TextArea
          className={(errorMessage && 'form-field-error') || ''}
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

/**
 * * date must be a `moment` object; e.g., moment(`date`)
 * ! formatting like - moment(`date`).format('DD/MM/YYYY') won't work; DatePicker will handle the formatting
 * @param field
 * @param form
 * @param props
 * @returns {*}
 * @constructor
 */
export const AntDatePicker = ({ field, form, ...props }) => {
  const {
    errors, setFieldValue, setFieldTouched,
  } = form;
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
        <DatePicker
          style={{ width: '100%' }}
          placeholder="Select date"
          className={(errorMessage && 'form-field-error') || ''}
          allowClear
          {...props}
          autoComplete="off"
          /* eslint-disable-next-line react/jsx-props-no-spreading */
          {...field}
          onChange={(e) => {
            setFieldValue(field.name, e);
          }}
          onBlur={() => setFieldTouched(field.name)}
        />
      </Tooltip>
      {/*{errorMessage && <div style={{ color: 'red', fontSize: '0.7em' }}>{errorMessage}</div>}*/}
    </>
  );
};

export const AntSelect = ({ field, form, ...props }) => {
  // eslint-disable-next-line no-unused-vars
  const { values, errors, setFieldValue } = form;
  const {
    options, selectedValue, showField = 'name', valueField = 'id',
  } = props;
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
          && options.map((item) => <Option value={item[valueField]} key={item[valueField]}>{item[showField]}</Option>)}
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
