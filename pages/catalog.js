import { useState } from 'react';
import useAllStation from '../hooks/useAllStation';
import { getAllStation } from '../lib/allStation';
import styles from '../styles/Catalog.module.css';

// import Link from 'next/link';

const Catalog = (lines) => {
  const justStation = useAllStation();
  const [selectedStation, setSelectedStation] = useState(null);
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  const lineA = lines.lines.filter(
    (station) => station.line === 'A' && station.artworks,
  );
  const lineB = lines.lines.filter(
    (station) => station.line === 'B' && station.artworks,
  );
  const lineC = lines.lines.filter(
    (station) => station.line === 'C' && station.artworks,
  );

  const handleStation = (e) => {
    setSelectedStation(e.target.value);
  };

  const handleAuthor = (e) => {
    setSelectedAuthor(e.target.value);
  };

  const resultStationA = lineA.find(
    (station) => station.station === selectedStation,
  );
  const resultStationB = lineB.find(
    (station) => station.station === selectedStation,
  );
  const resultStationC = lineC.find(
    (station) => station.station === selectedStation,
  );

  const resultStation = resultStationA || resultStationB || resultStationC;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>katalog</h2>
      <div className={styles.text}>
        <form>
          <label>
            Stanice:
            <select onChange={handleStation}>
              <option>--vybrat--</option>
              {justStation.map((station) => (
                <option value={station}>{station}</option>
              ))}
            </select>
          </label>
          <label>
            Autor:
            <select onChange={handleAuthor}>
              <option>--vybrat--</option>
              {justStation.map((station) => (
                <option value={station}>{station}</option>
              ))}
            </select>
          </label>
        </form>
      </div>
      <div>
        <h4>{selectedStation}</h4>
        {selectedStation !== null
          ? resultStation.artworks.map((artwork) => (
              <div
                key={artwork.id}
                className={
                  resultStationA
                    ? styles.containerA
                    : resultStationB
                    ? styles.containerB
                    : resultStationC
                    ? styles.containerC
                    : ''
                }
              >
                <img src={artwork.image} />
                <div className={styles.artwork_text}>
                  <div>{artwork.name.toUpperCase()}</div>
                  <div>{artwork.author}</div>
                  <div>{artwork.date}</div>
                  <div>{artwork.type}</div>
                </div>
              </div>
            ))
          : ''}
      </div>
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

export default Catalog;
