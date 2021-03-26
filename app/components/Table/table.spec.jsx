/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';

import Table from './index';

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

const rows = Array(5).fill(null).map((item, index) => ({
  id: index,
  fullName: 'test test test',
  email: 'test@gmail.com',
  phoneNumber: '+523339487364',
  userStatus: 'pendiente',
}));

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

describe('<Table/>', () => {
  test('should render table', () => {
    const { getByTestId, getAllByTestId } = render(
      <Table header={header} rows={rows} />,
    );

    const table = getByTestId('table-container');
    const tableHeaders = getAllByTestId('table-header');
    const tableRows = getAllByTestId('table-row');

    expect(table.tagName).toBe('TABLE');
    expect(tableHeaders.length).toEqual(4);
    expect(tableRows.length).toEqual(5);
  });
});
