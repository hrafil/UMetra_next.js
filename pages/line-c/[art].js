import { getStationC } from '../../lib/stationC';
import { CreateArt } from '../../components/CreateArt';
import { FooterArt } from '../../components/FooterArt';

export const Artwork = ({ station, lines }) => {
  return (
    <div className="container_artpage">
      <CreateArt station={station} color="circle_art_red" letter="c" />
      <FooterArt lines={lines} station={station} />
    </div>
  );
};

export const getStaticProps = ({ params }) => {
  const stationCList = getStationC();
  return {
    props: {
      lines: stationCList,
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
