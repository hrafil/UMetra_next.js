import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>UMetra</title>
        <meta name="description" content="Umění u metra" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>
          <Link href="/">UMetra</Link>
        </h1>
        <Link href="/about">O projektu</Link>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
