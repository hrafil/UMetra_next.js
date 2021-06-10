import Link from 'next/link';
import { useEffect } from 'react';
import CreateLine from '../components/CreateLine';
import { getStationB } from '../lib/stationB';
// import styles from '../styles/Lines.module.css';

const LineB = ({ lines }) => {
  useEffect(() => window.scrollTo(0, 2700), []);

  return (
    <main>
      <CreateLine
        key={lines.station}
        lines={lines}
        color="circle_yellow"
        colorEmpty="circle_empty_yellow"
        letter="b"
      />

      <div>
        <ul className="transfer">
          <li>
            <Link href="/line-a">Přestup na linku A</Link>
          </li>
          <li>
            <Link href="/line-c">Přestup na linku C</Link>
          </li>
        </ul>
      </div>
    </main>
  );
};

export const getStaticProps = () => {
  const stationBList = getStationB();
  return {
    props: {
      lines: stationBList,
    },
  };
};

export default LineB;
