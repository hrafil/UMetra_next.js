import Link from 'next/link';
import { useEffect } from 'react';
import { getStation } from '../lib/stationB';
// import styles from '../styles/Lines.module.css';

const Line = ({ line }) => {
  if (!line.artworks) {
    return (
      <div className="station">
        <div className="station_circle"></div>
        <p className="label lable_empty">{line.station.toUpperCase()}</p>
      </div>
    );
  } else {
    return (
      <Link
        href={`/line-b/[art]?art=${line.station}`}
        as={`/line-b/${line.station}`}
      >
        <div className="station">
          <div className="station_circle yellow"></div>
          <p className="label">{line.station.toUpperCase()}</p>
        </div>
      </Link>
    );
  }
};

const Lines = ({ lines }) => {
  useEffect(() => window.scrollTo(0, 2700), []);

  return (
    <main>
      {/* <div className="line yellow"> */}
      {lines.map((line) => (
        <Line key={line.station} line={line} />
      ))}
      {/* </div> */}
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
  const stationBList = getStation();
  return {
    props: {
      lines: stationBList,
    },
  };
};

export default Lines;
