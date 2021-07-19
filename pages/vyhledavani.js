import { useState, useEffect } from 'react';
import AllStation from '../components/AllStation';
import AllAuthors from '../components/AllAuthors';
import AllTypes from '../components/AllTypes';
import { getAllStation } from '../lib/allStation';
import styles from '../styles/Search.module.css';
import listStation from '../data/listStation.json';
import Popup from 'reactjs-popup';
import Link from 'next/link';

const Search = () => {
  const justStations = AllStation();
  const justAuthors = AllAuthors();
  const justTypes = AllTypes();

  const [selectedStation, setSelectedStation] = useState(null);
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [finalSelection, setFinalSelection] = useState(null);
  const [nothing, setNothing] = useState(null);

  const stationsFull = listStation.filter((item) => item.artworks !== false);

  const artworksIn = [];
  stationsFull.map((station) => {
    station.artworks.map((artwork) => artworksIn.push(artwork));
  });

  const transferJustOnce = [];
  for (let i = 0; i < artworksIn.length; i += 1) {
    if (
      transferJustOnce.some((art) =>
        art.image.includes(artworksIn[i].image),
      ) === false
    ) {
      transferJustOnce.push(artworksIn[i]);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setFinalSelection(
      transferJustOnce.filter(
        (station) =>
          (selectedAuthor === station.author || selectedAuthor === null) &&
          (selectedType === station.type || selectedType === null) &&
          (station.artwork.includes(selectedStation) ||
            selectedStation === null),
      ),
    );
  };

  const handleStation = (e) => {
    setSelectedStation(e.target.value === '--vybrat--' ? null : e.target.value);
    setNothing('Vašemu výběru neodpovídá žádné dílo.');
  };

  const handleAuthor = (e) => {
    setSelectedAuthor(e.target.value === '--vybrat--' ? null : e.target.value);
    setNothing('Vašemu výběru neodpovídá žádné dílo.');
  };

  const handleType = (e) => {
    setSelectedType(e.target.value === '--vybrat--' ? null : e.target.value);
    setNothing('Vašemu výběru neodpovídá žádné dílo.');
  };

  const handleReset = () => {
    setFinalSelection(null);
    setSelectedStation(null);
    setSelectedAuthor(null);
    setSelectedType(null);
  };

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
                <div className={styles.artworkHeader}>
                  {artwork.id.startsWith('a') &&
                  !artwork.artwork.startsWith('Muzeum') ? (
                    <Link href="/linka-a">
                      <div className={styles.circleGreen}></div>
                    </Link>
                  ) : artwork.id.startsWith('b') &&
                    !artwork.artwork.startsWith('Florenc') ? (
                    <Link href="/linka-b">
                      <div className={styles.circleYellow}></div>
                    </Link>
                  ) : artwork.id.startsWith('c') &&
                    !artwork.artwork.startsWith('Florenc') &&
                    !artwork.artwork.startsWith('Muzeum') ? (
                    <Link href="/linka-c">
                      <div className={styles.circleRed}></div>
                    </Link>
                  ) : artwork.artwork.startsWith('Florenc') ? (
                    <>
                      <Link href="/linka-b">
                        <div className={styles.circleYellow}></div>
                      </Link>
                      <Link href="/linka-c">
                        <div className={styles.circleRed}></div>
                      </Link>
                    </>
                  ) : artwork.artwork.startsWith('Muzeum') ? (
                    <>
                      <Link href="/linka-a">
                        <div className={styles.circleGreen}></div>
                      </Link>
                      <Link href="/linka-c">
                        <div className={styles.circleRed}></div>
                      </Link>
                    </>
                  ) : (
                    ''
                  )}

                  <Link
                    href={`/linka-${artwork.id.substring(
                      0,
                      1,
                    )}/${artwork.artwork.slice(0, -1)}`}
                  >
                    <p>{artwork.artwork.slice(0, -1).toUpperCase()}</p>
                  </Link>
                </div>
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
                </div>
              </div>
            ))
          : ''}
        {finalSelection !== null && finalSelection.length === 0 ? (
          <p>{nothing}</p>
        ) : (
          ''
        )}
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
