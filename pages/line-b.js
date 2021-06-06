import Link from 'next/link';
import { getStation } from '../lib/stationB';
// import styles from '../styles/Lines.module.css';

const Line = ({ line }) => {
  // const redLine =
  //   line.station === 'Florenc' ? <div className="red-line"></div> : '';

  if (!line.artworks) {
    return (
      <div className="station yellow">
        <span className="label">{line.station}</span>
      </div>
    );
  } else {
    return (
      <Link
        href={`/line-b/[art]?art=${line.station}`}
        as={`/line-b/${line.station}`}
      >
        <div className="station">
          <span className="label">{line.station}</span>
        </div>
      </Link>
    );
  }
};

//   return (
//     <div>
//       <div className="line yellow">
//         <Link
//           href={`/line-b/[art]?art=${line.station}`}
//           as={`/line-b/${line.station}`}
//         >
//           <div className={lineClass}>
//             <span className="label">{line.station}</span>
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// };

const Lines = ({ lines }) => {
  return (
    <>
      <div className="line yellow">
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
