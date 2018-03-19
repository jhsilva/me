import React from 'react';
import PropTypes from 'prop-types';
import ListDescription from 'components/ListDescription';

const TitleWithDescription = ({ title, description, list }) => (
  <section>
    <h3>{title}</h3>
    {description && <p>{description}</p>}
    {list && <ListDescription list={list} />}
  </section>
);

TitleWithDescription.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string),
};

TitleWithDescription.defaultProps = {
  title: '',
  description: '',
  list: [],
};

export default TitleWithDescription;
