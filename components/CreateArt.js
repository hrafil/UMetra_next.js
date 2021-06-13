import Link from 'next/link';
// import UserContext from '../components/UserContext';
// import { useContext } from 'react';
// import { useRouter } from 'next/router';

export const CreateArt = ({ station, color, letter }) => {
  // const router = useRouter();

  return (
    <>
      <h2>{station.station.toUpperCase()}</h2>
      <div className="container_artworks">
        <div className={color}></div>
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
    </>
  );
};

export default CreateArt;
