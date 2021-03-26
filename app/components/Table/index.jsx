/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';

import Header from './Header';

import './style.sass';

const Table = ({
  header, rows, onRowClick, callback,
}) => {
  const handleRowClick = (event, item) => {
    event.preventDefault();
    event.stopPropagation();
    onRowClick(item);
  };
  return (
    <div className="root">
      <table data-testid="table-container" className="table">
        <tr>
          <td className="highlight"><div /></td>
          <Header header={header} />
          <td className="highlight"><div /></td>
        </tr>
        {
          rows.map((item = {}) => {
            const { stopPropagation = {} } = item;
            return (
              <tr
                key={item.id}
                className={item.classNametr || ''}
              >
                <td data-testid="table-row" className="highlight"><div /></td>
                {
                  header.map(({ key, label }) => {
                    const value = get(item, key);
                    const isFunction = typeof value === 'function';
                    const stopClicked = stopPropagation[key] || false;

                    return (
                      <td
                        role="gridcell"
                        key={label}
                        data-th={label}
                        onClick={(event) => !stopClicked && handleRowClick(event, item)}
                      >
                        {isFunction ? value(item, callback) : value}
                      </td>
                    );
                  })
                }
                <td className="highlight"><div /></td>
              </tr>
            );
          })
        }
      </table>
    </div>
  );
};

Table.defaultProps = {
  header: [],
  rows: [],
  onRowClick: () => { },
  callback: () => { },
};

Table.propTypes = {
  header: PropTypes.arrayOf(PropTypes.object),
  rows: PropTypes.arrayOf(PropTypes.object),
  onRowClick: PropTypes.func,
  callback: PropTypes.func,
};

export default Table;
