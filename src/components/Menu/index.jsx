import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from 'components/MenuItem';

const Menu = ({ links }) => (
  <nav>{links.map(link => <MenuItem {...link} />)}</nav>
);

Menu.propTypes = {
  links: PropTypes.arrayOf(PropTypes.obj),
};

Menu.defaultProps = {
  links: [],
};

export default Menu;
