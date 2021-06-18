import styles from '../styles/About.module.css';
import { useState } from 'react';
import useAllStation from '../hooks/useAllStation';
import { getAllStation } from '../lib/allStation';

// import Link from 'next/link';

const Catalog = (lines) => {
  // console.log(lines.lines[0].art);

  const lineA = lines.lines[0].art.filter((station) => station.artworks);
  // console.log(lineA);

  const [station, setStation] = useState(null);
  const [author, setAuthor] = useState(null);

  const justStation = useAllStation();
  // console.log(station);

  const handleStation = (e) => {
    setStation(e.target.value);
  };

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

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
