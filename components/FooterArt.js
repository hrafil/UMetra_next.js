import Link from 'next/link';
import styles from '../styles/FooterArt.module.css';

export const FooterArt = ({ lines, station, color }) => {
  const stationIsFull = lines.filter((item) => item.artworks !== false);
  const mapStationIsFull = stationIsFull.map((item) => item.station);
  const index = mapStationIsFull.indexOf(station.station);

  const transferToMustekA =
    station.station === 'Můstek' && color === 'circle_art_yellow';
  const transferToMuzeumA =
    station.station === 'Muzeum' && color === 'circle_art_red';
  const tranferToMustekB =
    station.station === 'Můstek' && color === 'circle_art_green';
  const tranferToMuzeumC =
    station.station === 'Muzeum' && color === 'circle_art_green';
  const transferToFlorencB =
    station.station === 'Florenc' && color === 'circle_art_red';
  const transferToFlorencC =
    station.station === 'Florenc' && color === 'circle_art_yellow';

  return (
    <footer className={styles.footer_art}>
      <ul>
        <li className={styles.footer_center}>
          {transferToMustekA ? (
            <Link href="/linka-a/Můstek">přestup na linku A</Link>
          ) : transferToMuzeumA ? (
            <Link href="/linka-a/Muzeum">přestup na linku A</Link>
          ) : tranferToMustekB ? (
            <Link href="/linka-b/Můstek">přestup na linku B</Link>
          ) : tranferToMuzeumC ? (
            <Link href="/linka-c/Muzeum">přestup na linku C</Link>
          ) : transferToFlorencB ? (
            <Link href="/linka-b/Florenc">přestup na linku B</Link>
          ) : transferToFlorencC ? (
            <Link href="/linka-c/Florenc">přestup na linku C</Link>
          ) : (
            ''
          )}
        </li>

        {index === 0 ? undefined : (
          <li className={styles.footer_left}>
            <Link href={`${mapStationIsFull[index - 1]}`}>předchozí</Link>
          </li>
        )}
        {index === mapStationIsFull.length - 1 ? undefined : (
          <li className={styles.footer_right}>
            <Link href={`${mapStationIsFull[index + 1]}`}>následující</Link>
          </li>
        )}
      </ul>
    </footer>
  );
};

export default FooterArt;
