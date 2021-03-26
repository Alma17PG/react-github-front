/* eslint-disable react/no-array-index-key */
import React, { memo } from 'react';
import PropTypes from 'prop-types';

import CardItem from '../CardItem';

const CardList = ({ list }) => (
  <div
    data-testid="card-list"
    className="columns is-mobile is-multiline is-centered"
  >
    {
      list.map((item, index) => {
        const {
          onClick, description, image, title,
        } = item;
        return (
          <div key={index} className="column is-narrow">
            <CardItem
              description={description}
              image={image}
              title={title}
              onClick={onClick}
            />
          </div>
        );
      })
    }
  </div>
);

CardList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};

CardList.defaultProps = {
  list: [],
};

export default memo(CardList);
