// import { getStationB } from '../lib/stationB';
import lineA from '../data/listA.json';
import lineB from '../data/listB.json';
import lineC from '../data/listC.json';
import Link from 'next/link';

const Stations = () => {
  const stationAFull = lineA.filter((station) => station.artworks);

  const justStationA = stationAFull.map((station) => station.station);

  const stationASort = justStationA.sort();

  console.log(stationASort);

  return (
    <>
      <h2>Seznam stanic</h2>
      {stationASort.map((station) => (
        <div key={station}>
          <Link href={`/line-a/${station}`}>{station}</Link>
        </div>
      ))}
    </>
  );
};

export default Stations;

// export const getStaticProps = () => {
//   const stationBList = getStationB();
//   return {
//     props: {
//       lines: stationBList,
//     },
//   };
// };
