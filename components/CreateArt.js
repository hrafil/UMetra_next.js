import Link from 'next/link';

export const CreateArt = ({ station, color }) => {
  const transferToMustekA =
    station.station === 'Můstek' && color === 'circle_art_yellow';
  const transferToMuzeumA =
    station.station === 'Muzeum' && color === 'circle_art_red';
  const tranferToMustekB =
    station.station === 'Můstek' && color === 'circle_art_green';
  const tranferToMuzeumC =
    station.station === 'Muzeum' && color === 'circle_art_green';
  const transferToFlorencB =
    station.station === 'Florenc' && color === 'circle_art_red';
  const transferToFlorencC =
    station.station === 'Florenc' && color === 'circle_art_yellow';

  return (
    <>
      <h2 className="artwork_title">
        {station.station.toUpperCase()}
        {transferToMustekA ? (
          <Link href="/line-a/Můstek">
            <span className="transfer_art_green"></span>
          </Link>
        ) : transferToMuzeumA ? (
          <Link href="/line-a/Muzeum">
            <span className="transfer_art_green"></span>
          </Link>
        ) : tranferToMustekB ? (
          <Link href="/line-b/Můstek">
            <span className="transfer_art_yellow"></span>
          </Link>
        ) : tranferToMuzeumC ? (
          <Link href="/line-c/Muzeum">
            <span className="transfer_art_red"></span>
          </Link>
        ) : transferToFlorencB ? (
          <Link href="/line-b/Florenc">
            <span className="transfer_art_yellow"></span>
          </Link>
        ) : transferToFlorencC ? (
          <Link href="/line-c/Florenc">
            <span className="transfer_art_red"></span>
          </Link>
        ) : (
          ''
        )}
      </h2>
      <div className="container_artworks">
        <div className={color}></div>
        {station.artworks &&
          station.artworks.map((artwork) => (
            <div key={artwork.id} className="container_artwork">
              <img src={artwork.image} alt={artwork.name} />
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
