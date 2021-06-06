import { getStation } from '../../lib/stationB';

export const Artwork = ({ station }) => {
  return (
    <div>
      {station.artworks.map((artwork) => (
        <table>
          <tr>
            <th>Název:</th>
            <th>Autor</th>
            <th>Datace</th>
            <th>Typ</th>
          </tr>
          <tr>
            <th>{artwork.name}</th>
            <th>{artwork.author}</th>
            <th>{artwork.date}</th>
            <th>{artwork.type}</th>
          </tr>
        </table>
      ))}
    </div>
  );
};

export const getStaticProps = ({ params }) => {
  const stationBList = getStation();
  return {
    props: {
      station: stationBList.find((station) => station.station === params.art),
    },
  };
};

export const getStaticPaths = () => {
  const stationBList = getStation();
  return {
    paths: stationBList.map((station) => ({
      params: { art: station.station },
    })),
    fallback: false,
  };
};

export default Artwork;
