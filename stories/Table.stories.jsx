import React, { useMemo } from 'react';
import { number, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Table from '../app/components/Table';

const header = [{
  label: 'Nombre',
  key: 'fullName',
}, {
  label: 'Correo',
  key: 'email',
}, {
  label: 'Telefono',
  key: 'phoneNumber',
}, {
  label: 'Estatus',
  key: 'userStatus',
}];

export const Default = () => {
  const listSize = number('List size', 4);

  const rows = useMemo(() => (Array(listSize).fill(null).map((item, index) => ({
    id: index,
    fullName: 'test test test',
    email: 'test@gmail.com',
    phoneNumber: '+523339487364',
    userStatus: 'pendiente',
  }))), [listSize]);

  const onRowClick = (value) => {
    action('onRowClick')(value);
  };

  return (
    <div style={{
      backgroundColor: '#F7F8FB', width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center',
    }}
    >
      <Table
        header={header}
        rows={rows}
        onRowClick={onRowClick}
      />
    </div>
  );
};

export default {
  title: 'Table',
  decorators: [withKnobs],
};
