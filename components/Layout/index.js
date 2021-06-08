import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  const router = useRouter();
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
      <footer>
        <ul>
          {router.locales.map((locale) => (
            <li key={locale}>
              <Link href={router.asPath} locale={locale}>
                {locale}
              </Link>
            </li>
          ))}
        </ul>
      </footer>
      <main>{children}</main>
    </>
  );
};

export default Layout;
