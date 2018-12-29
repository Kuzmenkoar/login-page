import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import './form-selector.scss';
import { Headline, Warning } from '../formAttributes';

const FormSelector = (props) => {
  const {
    disabled,
    name,
    options,
    placeholder,
    headline,
    headlineRequired,
    input: { value, onChange },
    meta: { warning, error },
  } = props

  console.log('props', props)

  return (
    <div className="form-select">
      {headline && (
        <Headline
          headline={headline}
          required={headlineRequired}
          disabled={disabled}
        />
      )}
      <Select
        className={`form-select__select ${
          warning ? 'form-select__select--warning' : ''
        } ${error ? 'form-select__select--error' : ''}`}
        disabled={disabled}
        name={name}
        options={options}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
      {warning && <Warning warning={warning} />}
    </div>
  );
};

export default FormSelector;
