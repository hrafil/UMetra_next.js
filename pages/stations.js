// import { getStationB } from '../lib/stationB';
import lineA from '../data/listA.json';
import lineB from '../data/listB.json';
import lineC from '../data/listC.json';
import Link from 'next/link';

const Stations = () => {
  const stationAFull = lineA.filter((station) => station.artworks);
  const stationBFull = lineB.filter((station) => station.artworks);
  const stationCFull = lineC.filter((station) => station.artworks);

  const justStationA = stationAFull.map((station) => station.station);
  const justStationB = stationBFull.map((station) => station.station);
  const justStationC = stationCFull.map((station) => station.station);

  const stationAB = justStationA.concat(justStationB);
  const stationABC = stationAB.concat(justStationC);

  const allStation = stationABC.sort();

  console.log(allStation);

  return (
    <>
      <h2>Seznam stanic</h2>
      {allStation.map((station) => (
        <div key={station}>
          {station}
          {/* <Link href={`/line-a/${station}`}>{station}</Link> */}
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
