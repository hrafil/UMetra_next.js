import Link from 'next/link';
import { getStation } from '../lib/stationB';
// import styles from '../styles/Lines.module.css';

const Line = ({ line }) => {
  if (!line.artworks) {
    return (
      <div className="station yellow">
        <span className="label">{line.station}</span>
      </div>
    );
  } else {
    return (
      <Link
        href={`/line-b/[art]?art=${line.station}`}
        as={`/line-b/${line.station}`}
      >
        <div className="station">
          <span className="label">{line.station}</span>
        </div>
      </Link>
    );
  }
};

const Lines = ({ lines }) => {
  return (
    <>
      <div className="line yellow">
        {lines.map((line) => (
          <Line key={line.station} line={line} />
        ))}
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
