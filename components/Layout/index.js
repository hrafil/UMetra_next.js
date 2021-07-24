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
        <link
          href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300&display=swap"
          rel="stylesheet"
        />
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
