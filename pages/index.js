import Head from 'next/head';
// import styles from '../styles/Home.module.css';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="container_home">
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
  );
};

export default Home;
