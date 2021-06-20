import listStation from '../data/listStation.json';

const useAllAuthors = () => {
  // console.log(listStation.map((station) => station.station));

  const fullStation = listStation
    .map((station) => station)
    .filter((artwork) => artwork.artworks);

  console.log(fullStation[4].artworks[2].author);

  const artworks = fullStation.map((artwork) => artwork.artworks);
  console.log(artworks);

  return <div>Bla bla</div>;
};

export default useAllAuthors;
