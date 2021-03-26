import React, { useState } from 'react';
import { text, boolean, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import SearchBar from '../app/components/SearchBar';

export const Default = () => {
  const isLoading = boolean('isLoading', false, 'Other');
  const placeholder = text('Placeholder', 'Buscar usuario');

  const [_value, setValue] = useState('');

  const onSearch = (newValue) => {
    action('onSearch')(newValue);
    setValue(newValue);
  };

  return (
    <SearchBar
      isLoading={isLoading}
      placeholder={placeholder}
      value={_value}
      onSearch={onSearch}
    />
  );
};

export default {
  title: 'SearchBar',
  decorators: [withKnobs],
};
