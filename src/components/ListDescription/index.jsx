import React from 'react';
import PropTypes from 'prop-types';

const ListDescription = ({ list }) => (
  <ul>{list.map(item => <li>{item}</li>)}</ul>
);

ListDescription.propTypes = {
  list: PropTypes.string,
};

ListDescription.defaultProps = {
  list: [],
};

export default ListDescription;
