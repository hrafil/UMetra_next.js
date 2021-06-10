import { getStationB } from '../../lib/stationB';
import Link from 'next/link';
// import useTranslation from 'next-translate/useTranslation';
// import getT from 'next-translate/getT';
// import { useRouter } from 'next/router';

export const Artwork = ({ station }) => {
  // const { query } = useRouter();
  // const { t, lang } = useTranslation();

  // console.log({ query });

  return (
    <div className="container_artpage">
      <Link href="/line-b">Zpět</Link>
      <h2>{station.station.toUpperCase()}</h2>
      <div className="container_artworks">
        <div className="circle_art"></div>
        {station.artworks &&
          station.artworks.map((artwork) => (
            <div key={artwork.id} className="container_artwork">
              <img src={artwork.image} />
              <div>{artwork.name.toUpperCase()}</div>
              <div>{artwork.author}</div>
              <div>{artwork.date}</div>
              <div>{artwork.type}</div>
            </div>
          ))}
      </div>
    </div>
  );
};
// };

export const getStaticProps = ({ params }) => {
  const stationBList = getStationB();
  return {
    props: {
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
