import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import CardItem from '../app/components/CardItem';

const repositories = 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/Working_oh83.svg';

export const Default = () => {
  const title = text('Title', 'Buscar repositorios');
  const description = text('Description', 'Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.');

  const onClick = (_title) => {
    action('OnClick')(_title);
  };

  return (
    <CardItem
      image={repositories}
      title={title}
      description={description}
      onClick={onClick}
    />
  );
};

export const WithNoImage = () => {
  const title = text('Title', 'Buscar repositorios');
  const description = text('Description', 'Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.');

  const onClick = (_title) => {
    action('OnClick')(_title);
  };

  return (
    <CardItem
      title={title}
      description={description}
      onClick={onClick}
    />
  );
};

export const WithNoDescription = () => {
  const title = text('Title', 'Buscar repositorios');

  const onClick = (_title) => {
    action('OnClick')(_title);
  };

  return (
    <CardItem
      image={repositories}
      title={title}
      onClick={onClick}
    />
  );
};

export default {
  title: 'CardItem',
  decorators: [withKnobs],
};
