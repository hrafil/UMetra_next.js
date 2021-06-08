// import Head from 'next/head';
// import styles from '../styles/Home.module.css';
import Link from 'next/link';
import React, { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Home = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const [title, setTitle] = useState('UMetra');

  const handleTitle = () =>
    title === 'UMetra' ? setTitle('U metra') : setTitle('UMetra');

  return (
    <div className="container_home">
      <h1 onClick={handleTitle}>{title}</h1>
      <h2>{t('common:slogan')}</h2>
      <p>{t('common:information')}</p>
      <div className="btn_home">
        <li className="btn_green">
          <Link href="/line-a">A</Link>
        </li>
        <li className="btn_yellow">
          <Link href="/line-b">B</Link>
        </li>
        <li className="btn_red">
          <Link href="/line-c">C</Link>
        </li>
      </div>
      <footer>
        <ul>
          {router.locales.map((locale) => (
            <li key={locale}>
              <Link href={router.asPath} locale={locale}>
                {locale}
              </Link>
            </li>
          ))}
          {/* <div>{language}</div> */}
        </ul>

        {/* <ul>
          <li>
            <Link href={router.asPath}>{router.locales[1]}</Link>
          </li>
        </ul>

        <p>{router.locales[0]}</p> */}
      </footer>
    </div>
  );
};

export default Home;
