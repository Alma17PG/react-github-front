import Head from 'next/head';

import RepositorySearch from '../../app/containers/RepositorySearch';

export default function Users() {
  return (
    <div>
      <Head>
        <title>Buscar repositorios</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RepositorySearch />
    </div>
  );
}
