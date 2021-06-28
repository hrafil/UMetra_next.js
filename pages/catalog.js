import { useState, useEffect } from 'react';
import AllStation from '../components/AllStation';
import AllAuthors from '../components/AllAuthors';
import AllTypes from '../components/AllTypes';
import { getAllStation } from '../lib/allStation';
import styles from '../styles/Catalog.module.css';
import listStation from '../data/listStation.json';

// import Link from 'next/link';

// Budeš tam mít nějaký formulář, kde budou ty tři výběry (asi select), někde budeš mít pole se všemi stanicemi a u každé stanice ty tři údaje. Ty tři selecty budeš mít napojené každý na svůj state.

// Při změně kteréhokoli z nich vezmeš ty tři stavy a na jejich základě pomocí filter() projdeš to pole se všemi stanicemi. Výsledek bude nové pole jenom se stanicemi odpovídajícími kritériím, to zapíšeš do nějakého čtvrtého stavu a na základě toho čtvrtého stavu budeš vypisovat stanice na stránce.

const Catalog = (lines) => {
  const justStations = AllStation();
  const justAuthors = AllAuthors();
  const justTypes = AllTypes();

  const [selectedStation, setSelectedStation] = useState(null);
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [finalSelection, setfinalSelection] = useState(null);

  useEffect(() => {
    setfinalSelection(
      artworksIn.filter(
        (station) =>
          selectedAuthor === station.author &&
          selectedType === station.type &&
          station.artwork.includes(selectedStation),
      ),
    );

    console.log(finalSelection);
  }, [selectedStation, selectedAuthor, selectedType]);

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

  const resultStationA = lineA.find(
    (station) => station.station === selectedStation,
  );
  const resultStationB = lineB.find(
    (station) => station.station === selectedStation,
  );
  const resultStationC = lineC.find(
    (station) => station.station === selectedStation,
  );

  const stationsFull = listStation.filter((item) => item.artworks !== false);

  const artworksIn = [];
  stationsFull.map((station) => {
    station.artworks.map((artwork) => artworksIn.push(artwork));
  });

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>katalog</h2>
      <div className={styles.text}>
        <form className={styles.form}>
          <label className={styles.label}>
            Stanice:
            <select className={styles.select} onChange={handleStation}>
              <option value={null}>--vybrat--</option>
              {justStations.map((station) => (
                <option value={station}>{station}</option>
              ))}
            </select>
          </label>
          <label className={styles.label}>
            Autor:
            <select className={styles.select} onChange={handleAuthor}>
              <option value={null}>--vybrat--</option>
              {justAuthors.map((author) => (
                <option value={author}>{author}</option>
              ))}
            </select>
          </label>
          <label className={styles.label}>
            Typ:
            <select className={styles.select} onChange={handleType}>
              <option value={null}>--vybrat--</option>
              {justTypes.map((type) => (
                <option value={type}>{type}</option>
              ))}
            </select>
          </label>
          <button className={styles.button}>Filtrovat</button>
        </form>
      </div>
      <div>
        {finalSelection !== null
          ? finalSelection.map((artwork) => (
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
