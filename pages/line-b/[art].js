import { getStationB } from '../../lib/stationB';
import { CreateArt } from '../../components/CreateArt';
import lineB from '../../data/listB.json';
import Link from 'next/link';

export const Artwork = ({ station }) => {
  const stationsFull = lineB.filter((item) => item.artworks !== false);

  const mapStationsFull = stationsFull.map((item) => item.station);
  console.log(mapStationsFull);

  console.log(station.station);

  const index = mapStationsFull.indexOf(station.station);
  console.log(index);

  return (
    <>
      <CreateArt station={station} color="circle_art_yellow" letter="b" />
      <Link href={`${mapStationsFull[index - 1]}`}>Předchozí stanice</Link>
      <Link href={`${mapStationsFull[index + 1]}`}>Další stanice</Link>
    </>
  );
};

export const getStaticProps = ({ params }) => {
  const stationBList = getStationB();
  return {
    props: {
      lines: stationBList,
      station: stationBList.find((station) => station.station === params.art),
    },
  };
};

export const getStaticPaths = () => {
  const stationBList = getStationB();
  return {
    paths: stationBList.map((station) => ({
      params: { art: station.station },
    })),
    fallback: false,
  };
};

export default Artwork;
