import Head from 'next/head';
import Link from 'next/link';
import Transition from '../Transition/index';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  const router = useRouter();
  // let language =
  //   router.locale === 'cs' ? 'EN' : router.locale === 'en-US' ? 'CZ' : '';

  return (
    <>
      <Head>
        <title>UMetra</title>
        <meta name="description" content="Umění u metra" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        {/* <h1>
          <Link href="/">UMetra</Link>
        </h1>
        <Link href="/about">O projektu</Link> */}
        <button>
          <Link href="/">x</Link>
        </button>
      </header>
      <main>{children}</main>
      {/* <Transition location={router.pathname}>
        <main className="main">{children}</main>
      </Transition> */}
    </>
  );
};

export default Layout;
