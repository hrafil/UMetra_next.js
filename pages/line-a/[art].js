import { getStationA } from '../../lib/stationA';
import { CreateArt } from '../../components/CreateArt';

export const Artwork = ({ station }) => {
  return <CreateArt station={station} color="circle_art_green" letter="a" />;
};

export const getStaticProps = ({ params }) => {
  const stationAList = getStationA();
  return {
    props: {
      station: stationAList.find((station) => station.station === params.art),
    },
  };
};

export const getStaticPaths = () => {
  const stationAList = getStationA();
  return {
    paths: stationAList.map((station) => ({
      params: { art: station.station },
    })),
    fallback: false,
  };
};

export default Artwork;
