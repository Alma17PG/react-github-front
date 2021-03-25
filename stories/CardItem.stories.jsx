import React from 'react';

import CardItem from '../app/components/CardItem';

import repositories from '../app/assets/images/repositories.svg';

export const Main = () => (
  <CardItem image={repositories} title="Buscar repositorios" />
);

export default {
  title: 'CardItem',
};
