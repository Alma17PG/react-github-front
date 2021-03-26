/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CardList from './index';

const onClick = jest.fn();

const listSize = 5;
const list = (Array(listSize).fill(null).map(() => ({
  title: 'Buscar repositorios',
  image: 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/working_from_anywhere_ub67.svg',
  onClick,
})));

describe('<CardList/>', () => {
  test('should render list of cards', () => {
    const { getByTestId, getAllByTestId } = render(<CardList list={list} />);

    const cardList = getByTestId('card-list');
    const cards = getAllByTestId('card-item');
    const [firstCard, secondCard, thirdCard, fourthCard, fifthCard] = cards;

    expect(cardList.tagName).toBe('DIV');
    expect(cards.length).toEqual(listSize);
    userEvent.click(firstCard);
    userEvent.click(secondCard);
    userEvent.click(thirdCard);
    userEvent.click(fourthCard);
    userEvent.click(fifthCard);
    expect(onClick).toHaveBeenCalledTimes(listSize);
  });
});
