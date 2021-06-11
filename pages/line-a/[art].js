import { getStationA } from '../../lib/stationA';
import { CreateArt } from '../../components/CreateArt';
import { FooterArt } from '../../components/FooterArt';

export const Artwork = ({ station, lines }) => {
  return (
    <div className="container_artpage">
      <CreateArt station={station} color="circle_art_green" letter="a" />
      <FooterArt lines={lines} station={station} />
    </div>
  );
};

export const getStaticProps = ({ params }) => {
  const stationAList = getStationA();
  return {
    props: {
      lines: stationAList,
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
