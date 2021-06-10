import Link from 'next/link';

export const CreateArt = ({ station, color, letter }) => {
  // const stationsFull = lineB.filter((item) => item.artworks !== false);

  // const mapStationsFull = stationsFull.map((item) => item.station);
  // console.log(mapStationsFull);

  // console.log(station.station);

  // const index = mapStationsFull.indexOf(station.station);
  // console.log(index);

  return (
    <div className="container_artpage">
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
        {/* <Link href={`${station[5]}`}>Předchozí stanice</Link> */}
      </div>
    </div>
  );
};

export default CreateArt;
