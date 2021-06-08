import Link from 'next/link';
import { useEffect } from 'react';
import { getStation } from '../lib/stationB';
// import styles from '../styles/Lines.module.css';

const Line = ({ line }) => {
  if (!line.artworks) {
    return (
      <div className="station">
        <p className="label lable_empty">{line.station}</p>
      </div>
    );
  } else {
    return (
      <Link
        href={`/line-b/[art]?art=${line.station}`}
        as={`/line-b/${line.station}`}
      >
        <div className="station yellow">
          <p className="label">{line.station}</p>
        </div>
      </Link>
    );
  }
};

const Lines = ({ lines }) => {
  useEffect(() => window.scrollTo(0, 1300), []);

  return (
    <>
      <div className="line yellow">
        {lines.map((line) => (
          <Line key={line.station} line={line} />
        ))}
      </div>
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
    </>
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
