/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useMemo, memo } from 'react';
import PropTypes from 'prop-types';

import './style.sass';

const Pagination = ({
  count, page, rowsPerPage,
  onChangePage,
}) => {
  const paginationLabel = useMemo(() => {
    const startPosition = ((page - 1) * rowsPerPage) + 1;
    const endPosition = startPosition + (rowsPerPage - 1);
    const lastPosition = endPosition < count ? endPosition : count;

    return `${startPosition}-${lastPosition} de ${count}`;
  }, [count, page, rowsPerPage]);

  const isFirstPage = useMemo(() => page < 2, [page]);
  const isLastPage = useMemo(() => (
    (((page) * rowsPerPage) + 1) > count
  ), [count, page, rowsPerPage]);

  return (
    <div className="columns">
      <div className="column">
        <p className="subtitle is-6" data-testid="pagination-label">{paginationLabel}</p>
      </div>
      <div className="column">
        <nav className="pagination pagination-container is-rounded is-small is-right" role="navigation" aria-label="pagination">
          <a
            data-testid="pagination-previous"
            className="pagination-previous"
            disabled={isFirstPage}
            role="button"
            tabIndex="0"
            onKeyPress={() => { }}
            onClick={() => !isFirstPage && onChangePage(page - 1)}
          >
            Anterior
          </a>
          <a
            data-testid="pagination-next"
            className="pagination-next"
            disabled={isLastPage}
            role="button"
            tabIndex="0"
            onKeyPress={() => { }}
            onClick={() => !isLastPage && onChangePage(page + 1)}
          >
            Siguiente
          </a>
        </nav>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  count: PropTypes.number,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  onChangePage: PropTypes.func,
};

Pagination.defaultProps = {
  count: 1,
  page: 1,
  rowsPerPage: 10,
  onChangePage: () => { },
};

export default memo(Pagination);
