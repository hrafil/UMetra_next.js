import Link from 'next/link';
import { getStation } from '../lib/stationB';
// import styles from '../styles/Lines.module.css';

const Line = ({ line }) => {
  const lineClass = line.artworks ? 'station' : 'station isDisabled yellow';

  const redLine =
    line.station === 'Florenc' ? <div className="red-line"></div> : '';

  return (
    <div>
      <div className="line yellow">
        <Link
          href={`/line-b/[art]?art=${line.station}`}
          as={`/line-b/${line.station}`}
        >
          <div className={lineClass}>
            {redLine}
            <span className="label">{line.station}</span>
          </div>
        </Link>
      </div>
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
        <ul className="transfer">
          <li>
            <Link href="/line-a">Přestup na linku A</Link>
          </li>
          <li>
            <Link href="/line-c">Přestup na linku C</Link>
          </li>
        </ul>
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
