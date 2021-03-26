import React, { memo } from 'react';
import PropTypes from 'prop-types';

import CardTitle from './CardTitle';
import CardImage from './CardImage';
import CardDescription from './CardDescription';

import './style.sass';

const CardItem = ({
  image, title, description,
  onClick,
}) => (
  <div
    data-testid="card-item"
    className="card card-item"
    role="button"
    tabIndex="0"
    onKeyPress={() => { }}
    onClick={() => onClick(title)}
  >
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
  onClick: PropTypes.func,
};

CardItem.defaultProps = {
  image: '',
  title: '',
  description: '',
  onClick: () => { },
};

export default memo(CardItem);
