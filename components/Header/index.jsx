import Head from 'next/head';

import Seo from '../../components/Seo';

function Header() {
  return (
    <Head>
      <title>Planes para el día a día - Tienda Experiencias</title>
      <Seo />
      <link
        href="https://fonts.googleapis.com/css2?family=Duru+Sans&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Droid+Sans&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default Header;
