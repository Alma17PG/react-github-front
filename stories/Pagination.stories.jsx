import React, { useEffect, useState } from 'react';
import { number, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Pagination from '../app/components/Pagination';

export const Default = () => {
  const count = number('Count', 115);
  const page = number('Page', 1);
  const rowsPerPage = number('Rows Per Page', 10);

  const [_page, setPage] = useState(page);

  const onChangePage = (newPage) => {
    action('onChangePage')(newPage);
    setPage(newPage);
  };

  useEffect(() => {
    setPage(page);
  }, [page]);

  return (
    <Pagination
      count={count}
      page={_page}
      rowsPerPage={rowsPerPage}
      onChangePage={onChangePage}
    />
  );
};

export default {
  title: 'Pagination',
  decorators: [withKnobs],
};
