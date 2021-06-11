import { getStationB } from '../../lib/stationB';
import { CreateArt } from '../../components/CreateArt';
import { FooterArt } from '../../components/FooterArt';

export const Artwork = ({ station, lines }) => {
  return (
    <div className="container_artpage">
      <CreateArt
        station={station}
        color="circle_art_yellow"
        letter="b"
        lines={lines}
      />
      <FooterArt lines={lines} station={station} />
    </div>
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
