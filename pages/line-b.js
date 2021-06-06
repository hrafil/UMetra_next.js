import Link from 'next/link';
import { getStation } from '../lib/stationB';
import styles from '../styles/Lines.module.css';
import Modal from 'react-modal';

const Line = ({ line }) => {
  return (
    <div>
      <div className={styles.line}>
        <Link href={`/line-b/${line.station}`}>
          <div className={styles.station}>
            <span className={styles.label}>{line.station}</span>
          </div>
        </Link>
      </div>
      {/* <Modal isOpen={true}>Čauko!</Modal>; */}
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
