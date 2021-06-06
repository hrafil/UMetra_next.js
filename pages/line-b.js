import Link from 'next/link';
import { getStation } from '../lib/stationB';
import styles from '../styles/Lines.module.css';
import Modal from 'react-modal';
import { useRouter } from 'next/router';
import { Artwork } from './line-b/[art]';

Modal.setAppElement('#__next');

const Line = ({ line }) => {
  const router = useRouter();

  return (
    <div>
      <div className={styles.line}>
        <Link
          href={`/line-b/[art]?art=${line.station}`}
          as={`/line-b/${line.station}`}
        >
          <div className={styles.station}>
            <span className={styles.label}>
              {line.station} {line.artworks.name}
            </span>
          </div>
        </Link>
      </div>

      {/* <Modal isOpen={!!router.query.art}>
        <Artwork art={!!router.query.art} />
      </Modal> */}
    </div>
  );
};

const Lines = ({ lines }) => {
  return (
    <>
      <div>
        {lines.map((line) => (
          <Line key={line.station} line={line} />
        ))}
      </div>
      <div>
        <li>
          <Link href="/line-a">Přestup na linku A</Link>
        </li>
        <li>
          <Link href="/line-c">Přestup na linku C</Link>
        </li>
      </div>
    </>
  );
};

export const getStaticProps = () => {
  const stationBList = getStation();
  return {
    props: {
      lines: stationBList,
    },
  };
};

export default Lines;
