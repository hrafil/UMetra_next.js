import Link from 'next/link';
import Popup from 'reactjs-popup';
import React from 'react';

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
      <div className="logo">
        <Link href="/">
          <img src="/logo.svg" alt="logo" />
          {/* <>
            <div className="logo_green"></div>
            <div className="logo_yellow"></div>
            <div className="logo_red"></div>
          </> */}
        </Link>
      </div>
      <h2 className="artwork_title">{station.station.toUpperCase()}</h2>
      <div className="container_artworks">
        <div className={color}></div>
        {station.artworks &&
          station.artworks.map((artwork) => (
            <div key={artwork.id} className="container_artwork">
              <Popup
                trigger={<img src={artwork.image} alt={artwork.name} />}
                modal
                nested
              >
                {(close) => (
                  <div className="modal">
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                    <img
                      className="img_popup"
                      src={artwork.image}
                      alt={artwork.name}
                    />
                  </div>
                )}
              </Popup>
              <div className="artwork_text">
                <p>{artwork.name.toUpperCase()}</p>
                <p>{artwork.author}</p>
                <p>{artwork.date}</p>
                <p>{artwork.type}</p>
              </div>
            </div>
          ))}
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
      </div>
    </>
  );
};

export default CreateArt;
