/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ header }) => (
  <>
    {
      header.map(({ label = '' }, index) => (
        <th data-testid="table-header" key={index}>{label}</th>
      ))
    }
  </>
);

Header.defaultProps = {
  header: [],
};

Header.propTypes = {
  header: PropTypes.arrayOf(PropTypes.object),
};

export default Header;
