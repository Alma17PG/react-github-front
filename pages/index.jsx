import Head from 'next/head';

import HomeContainer from '../app/containers/Home';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Inicio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeContainer />
    </div>
  );
}
