import { getAllStation } from '../../lib/allStation';
import { CreateArt } from '../../components/CreateArt';
import { FooterArt } from '../../components/FooterArt';

export const Artwork = ({ station, lines }) => {
  return (
    <div className="container_red">
      <div className="container_artpage">
        <CreateArt station={station} color="circle_art_red" letter="c" />
        <FooterArt lines={lines} station={station} color="circle_art_red" />
      </div>
    </div>
  );
};

export const getStaticProps = ({ params }) => {
  const allStation = getAllStation();
  const lineC = allStation.filter(
    (station) => station.line === 'C' && station.artworks !== false,
  );

  return {
    props: {
      lines: lineC,
      station: lineC.find(
        (station) =>
          station.station.replace(/\s/g, '-').toLowerCase() === params.art,
      ),
    },
  };
};

export const getStaticPaths = () => {
  const allStation = getAllStation();
  const lineC = allStation.filter(
    (station) => station.line === 'C' && station.artworks !== false,
  );

  return {
    paths: lineC.map((station) => ({
      params: { art: station.station.replace(/\s/g, '-').toLowerCase() },
    })),
    fallback: false,
  };
};

export default Artwork;
