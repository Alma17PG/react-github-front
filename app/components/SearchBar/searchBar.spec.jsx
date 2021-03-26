/* eslint-disable no-undef */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import SearchBar from './index';

let onSearch = jest.fn();

afterEach(() => {
  onSearch = jest.fn();
});

describe.only('<SearchBar/>', () => {
  test('should render input searchBar', () => {
    const { getByTestId } = render(<SearchBar placeholder="Buscar usuario" onSearch={onSearch} />);

    const inputWrapper = getByTestId('input-wrapper');
    const inputSearch = getByTestId('input-search');

    expect(inputWrapper).not.toHaveClass('is-loading');
    expect(inputSearch.placeholder).toBe('Buscar usuario');
    fireEvent.change(inputSearch, { target: { value: 'alma' } });
    expect(inputSearch.value).toBe('alma');
    expect(onSearch).toHaveBeenCalledTimes(0);
    setTimeout(() => {
      expect(onSearch).toHaveBeenCalledTimes(1);
    }, 1000);
  });
  test('should render input searchBar with loader', () => {
    const { getByTestId } = render(<SearchBar value="test" placeholder="Buscar usuario" onSearch={onSearch} isLoading />);

    const inputWrapper = getByTestId('input-wrapper');
    const inputSearch = getByTestId('input-search');

    expect(inputWrapper).toHaveClass('is-loading');
    expect(inputSearch.placeholder).toBe('Buscar usuario');
    expect(inputSearch.value).toBe('test');
    fireEvent.change(inputSearch, { target: { value: 'alma' } });
    expect(inputSearch.value).toBe('alma');
    expect(onSearch).toHaveBeenCalledTimes(0);
    setTimeout(() => {
      expect(onSearch).toHaveBeenCalledTimes(1);
    }, 1000);
  });
});
