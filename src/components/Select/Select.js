import React from 'react';
import PropTypes from 'prop-types';

import './Select.scss';

import ChevronDown from '../../assets/images/chevron-down.png';

const propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  list: PropTypes.array.isRequired,
  onChange: PropTypes.func,
};

const defaultProps = {
  className: '',
  onChange: () => {},
};

const Select = ({ label, className, list, onChange, ...others }) => {
  const getList = () => {
    return list?.map(item => (
      <option key={item?.id} value={item?.id}>
        {item?.value}
      </option>
    ));
  };

  return (
    <div className="select-container relative">
      <select
        className={`select flex flex-justify default-border-radius fs-14 primary font-noto px3 ${className}`}
        onChange={onChange}
        {...others}
      >
        <option value="">{label}</option>
        {getList()}
      </select>
      <img
        src={ChevronDown}
        className="absolute icon"
        width="24"
        height="24"
        alt="dropdown-icon"
      />
    </div>
  );
};

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;
