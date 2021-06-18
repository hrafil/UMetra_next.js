import Link from 'next/link';
import styles from '../styles/Stations.module.css';
import useAllStation from '../hooks/useAllStation';
import { getAllStation } from '../lib/allStation';

const Stations = (allStation) => {
  const justStation = useAllStation();

  const lineA = allStation.lines[0].art.filter((station) => station.artworks);
  const lineB = allStation.lines[1].art.filter((station) => station.artworks);
  const lineC = allStation.lines[2].art.filter((station) => station.artworks);

  const justStationA = lineA.map((station) => station.station);
  const justStationB = lineB.map((station) => station.station);
  const justStationC = lineC.map((station) => station.station);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>seznam UMstanic</h2>
      {justStation.map((station) => (
        <div className={styles.text} key={station}>
          {justStationA.includes(station) ? (
            <Link className={styles.link} href={`/line-a/${station}`}>
              {station}
            </Link>
          ) : justStationB.includes(station) ? (
            <Link className={styles.link} href={`/line-b/${station}`}>
              {station}
            </Link>
          ) : justStationC.includes(station) ? (
            <Link className={styles.link} href={`/line-c/${station}`}>
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
