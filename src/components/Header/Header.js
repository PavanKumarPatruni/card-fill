import React from 'react';
import PropTypes from 'prop-types';

import './Header.scss';

const propTypes = {
  title: PropTypes.string,
};

const Header = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

Header.propTypes = propTypes;

Header.defaultProps = {
  title: 'React Setup',
};

export default Header;
