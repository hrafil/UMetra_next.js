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
        {index === 0 ? undefined : (
          <li className={styles.footer_left}>
            <Link
              href={`${mapStationIsFull[index - 1]
                .replace(/\s/g, '-')
                .toLowerCase()}`}
            >
              {/* &#8249; */}
              <img src="/arrow-left.svg" alt="arrow-left" />
              {/* {mapStationIsFull[index - 1].toUpperCase()} */}
            </Link>
          </li>
        )}
        <li className={styles.footer_center}>
          {transferToMustekA ? (
            <Link href="/linka-a/můstek">A</Link>
          ) : // <Link href="/linka-a/Můstek">přestup na linku A</Link>
          transferToMuzeumA ? (
            <Link href="/linka-a/muzeum">A</Link>
          ) : tranferToMustekB ? (
            <Link href="/linka-b/můstek">B</Link>
          ) : tranferToMuzeumC ? (
            <Link href="/linka-c/muzeum">C</Link>
          ) : transferToFlorencB ? (
            <Link href="/linka-b/florenc">B</Link>
          ) : transferToFlorencC ? (
            <Link href="/linka-c/florenc">C</Link>
          ) : (
            ''
          )}
        </li>

        {index === mapStationIsFull.length - 1 ? undefined : (
          <li className={styles.footer_right}>
            <Link
              href={`${mapStationIsFull[index + 1]
                .replace(/\s/g, '-')
                .toLowerCase()}`}
            >
              {/* &#8250; */}
              <img src="/arrow-right.svg" alt="arrow-right" />
              {/* {mapStationIsFull[index + 1].toUpperCase()} */}
            </Link>
          </li>
        )}
      </ul>
    </footer>
  );
};

export default FooterArt;
