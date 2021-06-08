import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  let router = useRouter();
  let language =
    router.locale === 'cs' ? 'EN' : router.locale === 'en-US' ? 'CZ' : '';

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
      <footer>
        <ul>
          {router.locales.map((locale) => (
            <li key={locale}>
              <Link href={router.asPath} locale={locale}>
                {language}
              </Link>
            </li>
          ))}
          <div>{language}</div>
        </ul>

        {/* <ul>
          <li>
            <Link href={router.asPath}>{router.locales[1]}</Link>
          </li>
        </ul>

        <p>{router.locales[0]}</p> */}
      </footer>
    </>
  );
};

export default Layout;
