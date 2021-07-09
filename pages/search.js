import { useState, useEffect } from 'react';
import AllStation from '../components/AllStation';
import AllAuthors from '../components/AllAuthors';
import AllTypes from '../components/AllTypes';
import { getAllStation } from '../lib/allStation';
import styles from '../styles/Search.module.css';
import listStation from '../data/listStation.json';
import Popup from 'reactjs-popup';

const Search = (lines) => {
  const justStations = AllStation();
  const justAuthors = AllAuthors();
  const justTypes = AllTypes();

  const [selectedStation, setSelectedStation] = useState(null);
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [finalSelection, setFinalSelection] = useState(null);
  // const [nothing, setNothing] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setFinalSelection(
      artworksIn.filter(
        (station) =>
          (selectedAuthor === station.author || selectedAuthor === null) &&
          (selectedType === station.type || selectedType === null) &&
          (station.artwork.includes(selectedStation) ||
            selectedStation === null),
      ),
    );
    // setNothing('Vašemu výběru neodpovídá žádné dílo.');
  };

  console.log(finalSelection);

  const handleStation = (e) => {
    setSelectedStation(e.target.value);
  };

  const handleAuthor = (e) => {
    setSelectedAuthor(e.target.value);
  };

  const handleType = (e) => {
    setSelectedType(e.target.value);
  };

  const handleReset = () => {
    setFinalSelection(null);
    setSelectedStation(null);
    setSelectedAuthor(null);
    setSelectedType(null);
  };

  // const lineA = lines.lines.filter(
  //   (station) => station.line === 'A' && station.artworks,
  // );
  // const lineB = lines.lines.filter(
  //   (station) => station.line === 'B' && station.artworks,
  // );
  // const lineC = lines.lines.filter(
  //   (station) => station.line === 'C' && station.artworks,
  // );

  // const resultStationA = lineA.find(
  //   (station) => station.station === selectedStation,
  // );

  // const resultStationB = lineB.find(
  //   (station) => station.station === selectedStation,
  // );
  // const resultStationC = lineC.find(
  //   (station) => station.station === selectedStation,
  // );

  const stationsFull = listStation.filter((item) => item.artworks !== false);

  const artworksIn = [];
  stationsFull.map((station) => {
    station.artworks.map((artwork) => artworksIn.push(artwork));
  });

  // const circleClass =
  //   artwork.id.slice(0, 1) === 'a' ? styles.circleGreen : styles.circleYellow;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>vyhledávání</h2>
      <div className={styles.text}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label}>
            Autor:
            <select className={styles.select} onChange={handleAuthor}>
              <option value={null}>--vybrat--</option>
              {justAuthors.map((author) => (
                <option key={author} value={author}>
                  {author}
                </option>
              ))}
            </select>
          </label>
          <label className={styles.label}>
            Typ:
            <select className={styles.select} onChange={handleType}>
              <option value={null}>--vybrat--</option>
              {justTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
          <label className={styles.label}>
            Stanice:
            <select className={styles.select} onChange={handleStation}>
              <option value={null}>--vybrat--</option>
              {justStations.map((station) => (
                <option key={station} value={station}>
                  {station}
                </option>
              ))}
            </select>
          </label>
          <button type="submit" className={styles.button}>
            Filtrovat
          </button>
          <button onClick={handleReset} type="reset" className={styles.button}>
            Zrušit filtr
          </button>
        </form>
      </div>
      <div>
        {finalSelection !== null
          ? finalSelection.map((artwork) => (
              <div className={styles.artwork} key={artwork.id}>
                <div
                  className={
                    artwork.id.slice(0, 1) === 'a'
                      ? styles.circleGreen
                      : artwork.id.slice(0, 1) === 'b'
                      ? styles.circleYellow
                      : artwork.id.slice(0, 1) === 'c'
                      ? styles.circleRed
                      : ''
                  }
                ></div>
                <Popup
                  trigger={
                    <img
                      src={artwork.image}
                      alt={artwork.name}
                      className={styles.img}
                    />
                  }
                  modal
                  nested
                >
                  {(close) => (
                    <div className="modal">
                      <button className="close" onClick={close}>
                        &times;
                      </button>
                      <img
                        className="img_popup"
                        src={artwork.image}
                        alt={artwork.name}
                      />
                    </div>
                  )}
                </Popup>

                <div className={styles.artwork_text}>
                  <p>{artwork.name.toUpperCase()}</p>
                  <p>{artwork.author}</p>
                  <p>{artwork.date}</p>
                  <p>{artwork.type}</p>
                  <p>{artwork.artwork.slice(0, -1)}</p>
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

export default Search;
