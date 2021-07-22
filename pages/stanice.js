import Link from 'next/link';
import styles from '../styles/Stations.module.css';
import AllStation from '../components/AllStation';
import { getAllStation } from '../lib/allStation';

const Stations = (allStation) => {
  const justStation = AllStation();

  const lineA = allStation.lines.filter(
    (station) => station.line === 'A' && station.artworks,
  );
  const lineB = allStation.lines.filter(
    (station) => station.line === 'B' && station.artworks,
  );
  const lineC = allStation.lines.filter(
    (station) => station.line === 'C' && station.artworks,
  );

  const justStationA = lineA.map((station) => station.station);
  const justStationB = lineB.map((station) => station.station);
  const justStationC = lineC.map((station) => station.station);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>seznam UMstanic</h2>
      {justStation.map((station) => (
        <div className={styles.text} key={station}>
          {justStationA.includes(station) ? (
            <Link className={styles.link} href={`/linka-a/${station}`}>
              {station}
            </Link>
          ) : justStationB.includes(station) ? (
            <Link className={styles.link} href={`/linka-b/${station}`}>
              {station}
            </Link>
          ) : justStationC.includes(station) ? (
            <Link className={styles.link} href={`/linka-c/${station}`}>
              {station}
            </Link>
          ) : (
            ''
          )}
        </div>
      ))}
    </div>
  );
};

export const getStaticProps = () => {
  const allStation = getAllStation();
  return {
    props: {
      lines: allStation,
    },
  };
};

export default Stations;
