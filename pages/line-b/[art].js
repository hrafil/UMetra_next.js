import { getStation } from '../../lib/stationB';
import Link from 'next/link';

export const Artwork = ({ station }) => {
  return (
    <div className="container_artpage">
      <Link href="/line-b">Zpět</Link>
      <h2>{station.station}</h2>
      <div className="container_artworks">
        {station.artworks &&
          station.artworks.map((artwork) => (
            <div key={artwork.id} className="container_artwork">
              <img src={artwork.image} />
              <div>{artwork.name}</div>
              <div>Autor: {artwork.author}</div>
              <div>Datace: {artwork.date}</div>
              <div>Typ: {artwork.type}</div>
            </div>
          ))}
      </div>
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
