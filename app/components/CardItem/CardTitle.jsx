import React, { memo } from 'react';
import PropTypes from 'prop-types';

const CardTitle = ({ title }) => (
  <>
    {title && (
    <div data-testid="card-title" className="media">
      <div className="media-content">
        <p className="title is-5 has-text-centered">{title}</p>
      </div>
    </div>
    )}
  </>
);

CardTitle.propTypes = {
  title: PropTypes.string,
};

CardTitle.defaultProps = {
  title: '',
};

export default memo(CardTitle);
