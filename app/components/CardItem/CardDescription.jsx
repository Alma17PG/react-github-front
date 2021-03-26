import React, { memo } from 'react';
import PropTypes from 'prop-types';

const CardDescription = ({ description }) => (
  <>
    {description && (
      <div data-testid="card-description" className="content">
        {description}
      </div>
    )}
  </>
);

CardDescription.propTypes = {
  description: PropTypes.string,
};

CardDescription.defaultProps = {
  description: '',
};

export default memo(CardDescription);
