import Link from 'next/link';

export const CreateArt = ({ station, color, letter }) => {
  return (
    <>
      <h2 className="artwork_text">{station.station.toUpperCase()}</h2>
      <div className="container_artworks">
        <div className={color}></div>
        {station.artworks &&
          station.artworks.map((artwork) => (
            <div key={artwork.id} className="container_artwork">
              <img src={artwork.image} />
              <div className="artwork_text">
                <div>{artwork.name.toUpperCase()}</div>
                <div>{artwork.author}</div>
                <div>{artwork.date}</div>
                <div>{artwork.type}</div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default CreateArt;
