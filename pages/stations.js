import lineA from '../data/listA.json';
import lineB from '../data/listB.json';
import lineC from '../data/listC.json';
import Link from 'next/link';
import styles from '../styles/Stations.module.css';

const Stations = () => {
  const stationAFull = lineA.filter((station) => station.artworks);
  const stationBFull = lineB.filter((station) => station.artworks);
  const stationCFull = lineC.filter((station) => station.artworks);

  const justStationA = stationAFull.map((station) => station.station);
  const justStationB = stationBFull.map((station) => station.station);
  const justStationC = stationCFull.map((station) => station.station);

  const stationAB = justStationA.concat(justStationB);
  const stationABC = stationAB.concat(justStationC);

  const allStation = stationABC.sort();

  stationABC.splice(stationABC.indexOf('Můstek'), 1);
  stationABC.splice(stationABC.indexOf('Florenc'), 1);
  stationABC.splice(stationABC.indexOf('Muzeum'), 1);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Seznam UMstanic</h2>
      {allStation.map((station) => (
        <div key={station}>
          {justStationA.includes(station) ? (
            <Link href={`/line-a/${station}`}>{station}</Link>
          ) : justStationB.includes(station) ? (
            <Link href={`/line-b/${station}`}>{station}</Link>
          ) : justStationC.includes(station) ? (
            <Link href={`/line-c/${station}`}>{station}</Link>
          ) : (
            ''
          )}
        </div>
      ))}
    </div>
  );
};

export default Stations;
