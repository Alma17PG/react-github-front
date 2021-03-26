import React, { memo } from 'react';
import PropTypes from 'prop-types';

import CardTitle from './CardTitle';
import CardImage from './CardImage';
import CardDescription from './CardDescription';

import './style.sass';

const CardItem = ({ image, title, description }) => (
  <div className="card card-item">
    <CardImage image={image} />
    <div className="card-content">
      <CardTitle title={title} />
      <CardDescription description={description} />
    </div>
  </div>
);

CardItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

CardItem.defaultProps = {
  image: '',
  title: '',
  description: '',
};

export default memo(CardItem);
