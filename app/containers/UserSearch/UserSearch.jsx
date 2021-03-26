import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import SearchBar from '../../components/SearchBar';
import Table from '../../components/Table';
import Pagination from '../../components/Pagination';

import { getUsers, getGeneralInfo } from '../../api/github';

const header = [{
  label: 'Avatar',
  key: 'avatar',
}, {
  label: 'Nombre',
  key: 'login',
}, {
  label: 'Número de seguidores',
  key: 'followerNumber',
}];

const rowsPerPage = 10;

const avatar = (item) => {
  const { avatar_url: url } = item;
  return (
    <div className="avatar-row">
      <figure className="image is-32x32">
        <img alt="avatar" className="is-rounded" src={url} />
      </figure>
    </div>
  );
};

const followerNumber = (item) => {
  const { followers } = item;
  return (
    <div className="followers-row">
      {followers}
    </div>
  );
};

const UserSearch = ({ userName, setUsername }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);

  const buildRows = async (items) => {
    const rows = await Promise.all(items.map(async (item) => {
      const { followers_url: followersUrl } = item;
      const followers = await getGeneralInfo({ url: followersUrl }) || [];
      return {
        ...item,
        avatar,
        followers: followers.length,
        followerNumber,
      };
    }));
    return rows;
  };

  const fetchUsers = async () => {
    const response = await getUsers({ searchText: userName, page, rowsPerPage });
    setIsLoading(false);
    if (response) {
      // eslint-disable-next-line camelcase
      const { total_count = 0, items = [] } = response;
      const rows = await buildRows(items);

      setCount(total_count);
      setUsers(rows);
    } else {
      setUsers([]);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchUsers();
  }, [userName]);

  useEffect(() => {
    fetchUsers();
  }, [page]);

  return (
    <div className="user-container">
      <div className="search">
        <SearchBar
          placeholder="Buscar usuario"
          isLoading={isLoading}
          value={userName}
          onSearch={setUsername}
        />
      </div>
      <div className="table-container">
        {users.length > 0
          ? (<Table header={header} rows={users} />)
          : (
            <div className="container-empty">
              <img className="img-empty" alt="empty" src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/empty_xct9.svg" />
              <div>No hay resultados con esa búsqueda, intenta buscando otro usuario</div>
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

UserSearch.propTypes = {
  userName: PropTypes.string,
  setUsername: PropTypes.func,
};

UserSearch.defaultProps = {
  userName: '',
  setUsername: () => { },
};

export default UserSearch;
