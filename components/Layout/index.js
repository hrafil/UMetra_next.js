import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../Nav/Navbar';
import SearchField from './searchbox.js';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>UMetra</title>
        <meta name="description" content="Umění u metra" />
        <link rel="icon" href="/favicon.ico" />
        {/* Global site tag (gtag.js) - Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-V63JSM91TG"
        ></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-V63JSM91TG');
        </script>
      </Head>
      <header>
        <div className="App">
          <Navbar />
        </div>
        {/* <button>
          <Link href="/">x</Link>
        </button> */}
      </header>
      <main>{children}</main>
    </>
  );
};

export const AppNav = () => {
  return (
    <div className="App">
      <Navbar />
      App
    </div>
  );
};

export default Layout;
