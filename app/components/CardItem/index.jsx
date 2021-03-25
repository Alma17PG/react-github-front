import React from 'react';
import PropTypes from 'prop-types';

import './style.sass';

const CardItem = ({ image, title }) => (
  <div className="card card-item">
    {image && (
      <div className="card-image">
        <figure className="image is-square">
          <img alt="img" src={image} />
        </figure>
      </div>
    )}
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-5 has-text-centered">{title}</p>
        </div>
      </div>
    </div>
  </div>
);

CardItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
};

CardItem.defaultProps = {
  image: '',
  title: '',
};

export default CardItem;
