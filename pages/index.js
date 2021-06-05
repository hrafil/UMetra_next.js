import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const Home = () => {
  return (
    <ul>
      <li>
        <Link href="/line-a">A</Link>
      </li>
      <li>
        <Link href="/line-b">B</Link>
      </li>
      <li>
        <Link href="/line-c">C</Link>
      </li>
    </ul>
  );
};

export default Home;
