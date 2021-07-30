import { getAllStation } from '../../lib/allStation';
import { CreateArt } from '../../components/CreateArt';
import { FooterArt } from '../../components/FooterArt';

export const Artwork = ({ station, lines }) => {
  return (
    <div className="container_yellow">
      <div className="container_artpage">
        <CreateArt
          station={station}
          color="circle_art_yellow"
          letter="b"
          lines={lines}
        />
        <FooterArt lines={lines} station={station} color="circle_art_yellow" />
      </div>
    </div>
  );
};

export const getStaticProps = ({ params }) => {
  const allStation = getAllStation();
  const lineB = allStation.filter(
    (station) => station.line === 'B' && station.artworks !== false,
  );

  return {
    props: {
      lines: lineB,
      station: lineB.find(
        (station) =>
          station.station.replace(/\s/g, '-').toLowerCase() === params.art,
      ),
    },
  };
};

export const getStaticPaths = () => {
  const allStation = getAllStation();
  const lineB = allStation.filter(
    (station) => station.line === 'B' && station.artworks !== false,
  );

  return {
    paths: lineB.map((station) => ({
      params: { art: station.station.replace(/\s/g, '-').toLowerCase() },
    })),
    fallback: false,
  };
};

export default Artwork;
