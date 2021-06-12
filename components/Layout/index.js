import Head from 'next/head';
import Link from 'next/link';
// import Transition from '../Transition/index';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import Navbar2 from '../Nav/Navbar';

const Layout = ({ children }) => {
  // const router = useRouter();
  // const { t, lang } = useTranslation();

  return (
    <>
      <Head>
        <title>UMetra</title>
        <meta name="description" content="Umění u metra" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className="App">
          {/* <Navbar /> */}
          <Navbar2 />
        </div>
        {/* <h1>
          <Link href="/">UMetra</Link>
        </h1>
        <Link href="/about">O projektu</Link> */}
        <button>
          <Link href="/">x</Link>
        </button>
      </header>
      <main>{children}</main>
      {/* <footer>
        <ul>
          {lang !== 'cs' && (
            <Link href={router.asPath} locale="cs">
              <a>CZ</a>
            </Link>
          )}
          {lang !== 'en' && (
            <Link href={router.asPath} locale="en">
              <a>EN</a>
            </Link>
          )}
        </ul>
      </footer> */}
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
