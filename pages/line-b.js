import Link from 'next/link';
import { getStation } from '../lib/stationB';
import styles from '../styles/Lines.module.css';

const Line = ({ line }) => {
  return (
    <div>
      <Link href={`/line-b/${line.station}`}>
        <div className={styles.station}>
          <span className={styles.label}>{line.station}</span>
        </div>
      </Link>
    </div>
  );
};

const Lines = ({ lines }) => {
  return (
    <>
      <div className={styles.line}>
        {lines.map((line) => (
          <Line key={line.station} line={line} />
        ))}
      </div>
    </>
  );
};

export const getStaticProps = () => {
  const seznamKontaktu = getStation();
  return {
    props: {
      lines: seznamKontaktu,
    },
  };
};
export default Lines;
