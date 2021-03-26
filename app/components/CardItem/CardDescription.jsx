import React, { memo } from 'react';
import PropTypes from 'prop-types';

import './style.sass';

const CardDescription = ({ description }) => (
  <>
    {description && (
      <div className="content">
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
