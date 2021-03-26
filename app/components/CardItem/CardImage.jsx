import React, { memo } from 'react';
import PropTypes from 'prop-types';

import './style.sass';

const CardImage = ({ image }) => (
  <>
    {image && (
      <div className="card-image">
        <figure className="image is-square">
          <img alt="img" src={image} />
        </figure>
      </div>
    )}
  </>
);

CardImage.propTypes = {
  image: PropTypes.string,
};

CardImage.defaultProps = {
  image: '',
};

export default memo(CardImage);
