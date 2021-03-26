/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useState, useCallback } from 'react';
import debounce from 'lodash.debounce';
import clsx from 'clsx';

import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({
  value, isLoading, placeholder,
  onSearch,
}) => {
  const [text, setText] = useState(value);

  const debounceSearch = useCallback(debounce((inputValue) => {
    onSearch(inputValue);
  }, 1000), []);

  const handleChange = (event) => {
    setText(event.target.value);
    debounceSearch(event.target.value);
  };

  return (
    <div
      data-testid="input-wrapper"
      className={clsx(
        'control has-icons-left',
        { 'is-loading': isLoading },
      )}
    >
      <input
        data-testid="input-search"
        className="input"
        type="text"
        placeholder={placeholder}
        value={text}
        onChange={handleChange}
      />
      <span className="icon is-small is-left">
        <FontAwesomeIcon icon={faSearch} />
      </span>
    </div>
  );
};

SearchBar.propTypes = {
  isLoading: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onSearch: PropTypes.func,
};

SearchBar.defaultProps = {
  isLoading: false,
  placeholder: '',
  value: '',
  onSearch: () => { },
};

export default memo(SearchBar);
