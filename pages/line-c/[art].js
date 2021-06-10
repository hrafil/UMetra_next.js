import { getStationC } from '../../lib/stationC';
import { CreateArt } from '../../components/CreateArt';

export const Artwork = ({ station }) => {
  return <CreateArt station={station} color="circle_art_red" letter="c" />;
};

export const getStaticProps = ({ params }) => {
  const stationCList = getStationC();
  return {
    props: {
      station: stationCList.find((station) => station.station === params.art),
    },
  };
};

export const getStaticPaths = () => {
  const stationCList = getStationC();
  return {
    paths: stationCList.map((station) => ({
      params: { art: station.station },
    })),
    fallback: false,
  };
};

export default Artwork;
