import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';

import CardItem from '../app/components/CardItem';

import repositories from '../app/assets/images/repositories.svg';

export const Default = () => {
  const title = text('Title', 'Buscar repositorios');
  const description = text('Description', 'Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.');

  return (
    <CardItem
      image={repositories}
      title={title}
      description={description}
    />
  );
};

export const WithNoImage = () => {
  const title = text('Title', 'Buscar repositorios');
  const description = text('Description', 'Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.');

  return (
    <CardItem
      title={title}
      description={description}
    />
  );
};

export const WithNoDescription = () => {
  const title = text('Title', 'Buscar repositorios');

  return (
    <CardItem
      image={repositories}
      title={title}
    />
  );
};

export default {
  title: 'CardItem',
  decorators: [withKnobs],
};
