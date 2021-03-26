import React, { useMemo } from 'react';
import { text, number, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import CardList from '../app/components/CardList';

const repositories = 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/Working_oh83.svg';

export const Default = () => {
  const title = text('Title', 'Buscar repositorios');
  const listSize = number('List size', 4);

  const onClick = (_title) => {
    action('OnClick')(_title);
  };

  const list = useMemo(() => (Array(listSize).fill(null).map(() => ({
    title,
    image: repositories,
    onClick,
  }))), [listSize, title]);

  return (
    <CardList
      list={list}
    />
  );
};

export default {
  title: 'CardList',
  decorators: [withKnobs],
};
