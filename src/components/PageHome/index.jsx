import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Header';

const PageHome = ({ title }) => (
  <div className="PageHome">
    <Header title={title} />
  </div>
);

PageHome.propTypes = {
  title: PropTypes.string,
};

PageHome.defaultProps = {
  title: 'Jhonatan da Silva Batista',
};

export default PageHome;
