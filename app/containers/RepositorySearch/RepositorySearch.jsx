import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import SearchBar from '../../components/SearchBar';
import Table from '../../components/Table';
import Pagination from '../../components/Pagination';

import { getRepositories } from '../../api/github';

const header = [{
  label: 'Nombre',
  key: 'full_name',
}, {
  label: 'Descripcion',
  key: 'description',
}, {
  label: 'Lenguaje',
  key: 'language',
}, {
  label: 'Propietario',
  key: 'owner.login',
}];

const rowsPerPage = 10;

const RepositorySearch = ({ repositoryName, setRepositoryName }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [repositories, setRepositories] = useState([]);

  const fetchRepositories = async () => {
    const response = await getRepositories({ searchText: repositoryName, page, rowsPerPage });
    setIsLoading(false);
    if (response) {
      // eslint-disable-next-line camelcase
      const { total_count = 0, items = [] } = response;

      setCount(total_count);
      setRepositories(items);
    } else {
      setRepositories([]);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchRepositories();
  }, [repositoryName]);

  useEffect(() => {
    fetchRepositories();
  }, [page]);

  const handleRowClick = (item) => {
    const { svn_url: url } = item;
    window?.open(url, '_blank');
  };

  return (
    <div className="user-container">
      <div className="search">
        <SearchBar
          placeholder="Buscar repositorio"
          isLoading={isLoading}
          value={repositoryName}
          onSearch={setRepositoryName}
        />
      </div>
      <div className="table-container">
        {repositories.length > 0
          ? (<Table header={header} rows={repositories} onRowClick={handleRowClick} />)
          : (
            <div className="container-empty">
              <img className="img-empty" alt="empty" src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/empty_xct9.svg" />
              <div>No hay resultados con esa búsqueda, intenta buscando otro repositorio</div>
            </div>
          )}
      </div>
      <div>
        <Pagination
          count={count}
          page={page}
          rowsPerPage={rowsPerPage}
          onChangePage={setPage}
        />
      </div>
    </div>
  );
};

RepositorySearch.propTypes = {
  repositoryName: PropTypes.string,
  setRepositoryName: PropTypes.func,
};

RepositorySearch.defaultProps = {
  repositoryName: '',
  setRepositoryName: () => { },
};

export default RepositorySearch;
