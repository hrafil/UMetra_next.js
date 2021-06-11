import Link from 'next/link';

export const FooterArt = ({ lines, station }) => {
  const stationIsFull = lines.filter((item) => item.artworks !== false);
  const mapStationIsFull = stationIsFull.map((item) => item.station);
  const index = mapStationIsFull.indexOf(station.station);

  return (
    <footer>
      {index === 0 ? undefined : (
        <Link href={`${mapStationIsFull[index - 1]}`}>Předchozí stanice</Link>
      )}
      {index === mapStationIsFull.length - 1 ? undefined : (
        <Link href={`${mapStationIsFull[index + 1]}`}>Další stanice</Link>
      )}
    </footer>
  );
};

export default FooterArt;
