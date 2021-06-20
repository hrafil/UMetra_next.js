import { useState } from 'react';
import AllStation from '../components/AllStation';
import AllAuthors from '../components/AllAuthors';
import AllTypes from '../components/AllTypes';
import { getAllStation } from '../lib/allStation';
import styles from '../styles/Catalog.module.css';
import listStation from '../data/listStation.json';

// import Link from 'next/link';

const Catalog = (lines) => {
  const justStations = AllStation();
  const justAuthors = AllAuthors();
  const justTypes = AllTypes();

  const [selectedStation, setSelectedStation] = useState(null);
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

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

  const handleType = (e) => {
    setSelectedType(e.target.value);
  };

  // const resultStationA = lineA.find(
  //   (station) => station.station === selectedStation,
  // );
  // const resultStationB = lineB.find(
  //   (station) => station.station === selectedStation,
  // );
  // const resultStationC = lineC.find(
  //   (station) => station.station === selectedStation,
  // );

  // const resultStation = resultStationA || resultStationB || resultStationC;

  const stationsFull = listStation.filter((item) => item.artworks !== false);

  const artworksIn = [];
  stationsFull.map((station) => {
    station.artworks.map((artwork) => artworksIn.push(artwork));
  });

  console.log(artworksIn);

  const resultAuthor = [];
  for (let i = 0; i < artworksIn.length; i += 1) {
    artworksIn[i].author === selectedAuthor
      ? resultAuthor.push(artworksIn[i])
      : '';
  }

  const resultType = [];
  for (let i = 0; i < artworksIn.length; i += 1) {
    artworksIn[i].type === selectedType ? resultType.push(artworksIn[i]) : '';
  }

  console.log(resultType);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>katalog</h2>
      <div className={styles.text}>
        <form className={styles.form}>
          <label>
            Stanice:
            <select onChange={handleStation}>
              <option>--vybrat--</option>
              {justStations.map((station) => (
                <option value={station}>{station}</option>
              ))}
            </select>
          </label>
          <label>
            Autor:
            <select onChange={handleAuthor}>
              <option>--vybrat--</option>
              {justAuthors.map((author) => (
                <option value={author}>{author}</option>
              ))}
            </select>
          </label>
          <label>
            Typ:
            <select onChange={handleType}>
              <option>--vybrat--</option>
              {justTypes.map((type) => (
                <option value={type}>{type}</option>
              ))}
            </select>
          </label>
        </form>
      </div>
      <div>
        <h4>{selectedStation}</h4>
        {selectedStation !== null
          ? resultStation.artworks.map((artwork) => (
              <div key={artwork.id}>
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
        {selectedAuthor !== null
          ? resultAuthor.map((artwork) => (
              <>
                <img src={artwork.image} />
                <div className={styles.artwork_text}>
                  <div>{artwork.name.toUpperCase()}</div>
                  <div>{artwork.author}</div>
                  <div>{artwork.date}</div>
                  <div>{artwork.type}</div>
                </div>
              </>
            ))
          : ''}
        {selectedType !== null
          ? resultType.map((artwork) => (
              <>
                <img src={artwork.image} />
                <div className={styles.artwork_text}>
                  <div>{artwork.name.toUpperCase()}</div>
                  <div>{artwork.author}</div>
                  <div>{artwork.date}</div>
                  <div>{artwork.type}</div>
                </div>
              </>
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
