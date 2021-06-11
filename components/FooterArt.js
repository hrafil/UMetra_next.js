import Link from 'next/link';
import styles from '../styles/FooterArt.module.css';

export const FooterArt = ({ lines, station }) => {
  const stationIsFull = lines.filter((item) => item.artworks !== false);
  const mapStationIsFull = stationIsFull.map((item) => item.station);
  const index = mapStationIsFull.indexOf(station.station);

  return (
    <footer className={styles.footer_art}>
      {index === 0 ? undefined : (
        <p className={styles.footer_left}>
          <Link className="footer_a" href={`${mapStationIsFull[index - 1]}`}>
            Předchozí stanice
          </Link>
        </p>
      )}
      {index === mapStationIsFull.length - 1 ? undefined : (
        <p className={styles.footer_right}>
          <Link href={`${mapStationIsFull[index + 1]}`}>Další stanice</Link>
        </p>
      )}
    </footer>
  );
};

export default FooterArt;
