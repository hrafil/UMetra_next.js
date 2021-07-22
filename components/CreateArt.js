import Link from 'next/link';
import Popup from 'reactjs-popup';
import React from 'react';
import Swiper from 'react-id-swiper';

export const CreateArt = ({ station, color }) => {
  return (
    <>
      <div className="logo">
        <Link href="/">
          <img src="/logo.svg" alt="logo" />
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
      </div>
    </>
  );
};

export default CreateArt;
