/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Pagination from './index';

let onChangePage = jest.fn();

afterEach(() => {
  onChangePage = jest.fn();
});

describe('<Pagination/>', () => {
  test('should render pagination', () => {
    const { getByTestId, rerender } = render(
      <Pagination page={1} count={25} rowsPerPage={10} onChangePage={onChangePage} />,
    );

    const label = getByTestId('pagination-label');
    const previous = getByTestId('pagination-previous');
    const next = getByTestId('pagination-next');

    expect(label).toHaveTextContent('1-10 de 25');
    expect(previous).toHaveAttribute('disabled');
    userEvent.click(next);
    rerender(<Pagination page={2} count={25} rowsPerPage={10} onChangePage={onChangePage} />);
    expect(label).toHaveTextContent('11-20 de 25');
    expect(previous).not.toHaveAttribute('disabled');
    userEvent.click(next);
    rerender(<Pagination page={3} count={25} rowsPerPage={10} onChangePage={onChangePage} />);
    expect(label).toHaveTextContent('21-25 de 25');
    expect(previous).not.toHaveAttribute('disabled');
    expect(next).toHaveAttribute('disabled');
  });
});
