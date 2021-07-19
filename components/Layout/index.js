import Head from 'next/head';
import Link from 'next/link';

import { Navbar } from '../Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>UMetra</title>
        <meta name="description" content="Umění u metra" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className="App">
          <Navbar />
        </div>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
