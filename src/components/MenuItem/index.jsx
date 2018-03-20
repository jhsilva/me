import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MenuItem = ({ path, name }) => (
  <Link href={path} to={path}>
    {name}
  </Link>
);

MenuItem.propTypes = {
  path: PropTypes.string,
  name: PropTypes.string,
};

MenuItem.defaultProps = {
  path: '',
  name: '',
};

export default MenuItem;
