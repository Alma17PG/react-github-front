import React from 'react';
import { useRouter } from 'next/router';

import CardList from '../../components/CardList';

import './style.module.sass';

const Home = () => {
  const router = useRouter();

  const list = [{
    title: 'Buscar usuarios',
    image: 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/Hire_re_gn5j.svg',
    onClick: () => { router.push('/users'); },
  }, {
    title: 'Buscar repositorios',
    image: 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/Working_oh83.svg',
    onClick: () => { router.push('/repositories'); },
  }];

  return (
    <div className="root">
      <p className="subtitle is-5">¿Qué deseas hacer el día de hoy?</p>
      <CardList list={list} />
    </div>
  );
};

export default Home;
