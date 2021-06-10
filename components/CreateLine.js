import Link from 'next/link';
import styles from '../styles/Line.module.css';

const CreateStation = ({ line }) => {
  if (!line.artworks) {
    return (
      <div className={styles.station}>
        <div className={styles.circle_empty_yellow}></div>
        <p className={styles.lable_empty}>{line.station.toUpperCase()}</p>
      </div>
    );
  } else {
    return (
      <>
        <Link
          href={`/line-b/[art]?art=${line.station}`}
          as={`/line-b/${line.station}`}
        >
          <div className={styles.station}>
            <div className={styles.circle_yellow}></div>
            <p className={styles.label}>{line.station.toUpperCase()}</p>
          </div>
        </Link>
      </>
    );
  }
};

const CreateLine = ({ lines }) => {
  return (
    <main>
      {lines.map((line) => (
        <CreateStation key={line.station} line={line} />
      ))}
    </main>
  );
};

export default CreateLine;
