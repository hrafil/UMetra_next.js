import { getStation } from '../../lib/stationB';

export const Artwork = ({ station }) => {
  return (
    <div className="container_artworks">
      {station.artworks &&
        station.artworks.map((artwork) => (
          <div key={artwork.id} className="container_artwork">
            <img src={artwork.image} />
            <table>
              <tbody>
                <tr>
                  <td>Název:</td>
                  <td>Autor</td>
                  <td>Datace</td>
                  <td>Typ</td>
                </tr>
                <tr>
                  <td>{artwork.name}</td>
                  <td>{artwork.author}</td>
                  <td>{artwork.date}</td>
                  <td>{artwork.type}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
    </div>
  );
};
// };

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
