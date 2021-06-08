// import Head from 'next/head';
// import styles from '../styles/Home.module.css';
import Link from 'next/link';
import React, { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';

const Home = () => {
  let { t } = useTranslation();

  const [title, setTitle] = useState('UMetra');
  // const [b, setB] = useState('B');
  // const [yellowLink, setYellowLink] = useState('');

  const handleTitle = () =>
    title === 'UMetra' ? setTitle('U metra') : setTitle('UMetra');

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   setB('');
  //   window.setTimeout(() => {}, 100000);
  // };

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
    </div>
  );
};

export default Home;
