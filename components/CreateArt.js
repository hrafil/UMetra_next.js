import Link from 'next/link';

export const CreateArt = ({ station, color, letter }) => {
  return (
    <>
      <Link href={`/line-${letter}`}>Zpět</Link>
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
