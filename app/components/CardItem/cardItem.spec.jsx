/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CardItem from './index';

let onClick = jest.fn();

afterEach(() => {
  onClick = jest.fn();
});

describe('<CardItem/>', () => {
  test('should render only title', () => {
    const { getByTestId, queryByTestId } = render(<CardItem title="test" onClick={onClick} />);

    const card = getByTestId('card-item');
    const cardTitle = queryByTestId('card-title');
    const cardImage = queryByTestId('card-image');
    const cardDescription = queryByTestId('card-description');

    expect(card.tagName).toBe('DIV');
    userEvent.click(card);
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(cardTitle).toBeInTheDocument();
    expect(cardImage).not.toBeInTheDocument();
    expect(cardDescription).not.toBeInTheDocument();
  });

  test('should render all components', () => {
    const { getByTestId, queryByTestId } = render(<CardItem title="test" onClick={onClick} image="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/working_from_anywhere_ub67.svg" description="test" />);

    const card = getByTestId('card-item');
    const cardTitle = queryByTestId('card-title');
    const cardImage = queryByTestId('card-image');
    const cardDescription = queryByTestId('card-description');

    expect(card.tagName).toBe('DIV');
    userEvent.click(card);
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(cardTitle).toBeInTheDocument();
    expect(cardImage).toBeInTheDocument();
    expect(cardDescription).toBeInTheDocument();
  });

  test('should render title and image', () => {
    const { getByTestId, queryByTestId } = render(<CardItem title="test" onClick={onClick} image="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/working_from_anywhere_ub67.svg" />);

    const card = getByTestId('card-item');
    const cardTitle = queryByTestId('card-title');
    const cardImage = queryByTestId('card-image');
    const cardDescription = queryByTestId('card-description');

    expect(card.tagName).toBe('DIV');
    userEvent.click(card);
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(cardTitle).toBeInTheDocument();
    expect(cardImage).toBeInTheDocument();
    expect(cardDescription).not.toBeInTheDocument();
  });
});
