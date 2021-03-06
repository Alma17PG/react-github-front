import Head from 'next/head';

import UserSearch from '../../app/containers/UserSearch';

export default function Users() {
  return (
    <div>
      <Head>
        <title>Buscar usuarios</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserSearch />
    </div>
  );
}
