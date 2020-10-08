import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Utils } from '../../utils';

import './Input.scss';

const propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  value: PropTypes.string,
  maxLength: PropTypes.number,
};

const defaultProps = {
  type: 'text',
  onChange: () => {},
  className: '',
  value: '',
  maxLength: 255,
};

const Input = ({
  label,
  type,
  onChange,
  className,
  onlyNumbers,
  value: inputValue,
  ...others
}) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(inputValue);
  }, [inputValue]);

  const onChangeText = event => {
    const { value, maxLength } = event?.target;

    if (value.length > maxLength) {
      return;
    }

    if (value === '') {
      onChange(event);
      return;
    }

    switch (type) {
      case 'number':
        if (Utils.isValidNumber(value)) {
          onChange(event);
        }
        break;
      case 'cardnumber':
        if (Utils.isValidNumber(value)) {
          onChange(event);
        }
        break;
      default:
        onChange(event);
        break;
    }
  };

  return (
    <div className={`flex flex-column p2 ${className}`}>
      <label className="fs-12 primary mb1">{label}</label>
      <input
        type="text"
        className="input fs-14 primary font-noto default-border-radius p3"
        onChange={onChangeText}
        value={
          type === 'cardnumber'
            ? value
            : value
        }
        {...others}
      />
    </div>
  );
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
