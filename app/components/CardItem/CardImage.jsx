/* eslint-disable react/forbid-prop-types */
import React, { memo } from 'react';
import PropTypes from 'prop-types';

const CardImage = ({ image }) => (
  <>
    {image && (
      <div data-testid="card-image" className="card-image">
        <figure className="image is-1by1">
          <img alt="img" src={image} />
        </figure>
      </div>
    )}
  </>
);

CardImage.propTypes = {
  image: PropTypes.any,
};

CardImage.defaultProps = {
  image: '',
};

export default memo(CardImage);
