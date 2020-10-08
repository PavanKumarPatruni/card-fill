import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

const defaultProps = {
  onClick: () => {},
  className: '',
};

const Button = ({ value, className, onClick, ...others }) => {
  return (
    <button
      className={`flex flex-center flex-justify-center button font-default border-box default-border-radius fs-18 white ${className}`}
      onClick={onClick}
      {...others}
    >
      {value}
    </button>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
