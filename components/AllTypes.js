import listStation from '../data/listStation.json';

const AllTypes = () => {
  const stationsFull = listStation.filter((item) => item.artworks !== false);
  console.log(stationsFull);

  const artworksIn = [];
  stationsFull.map((station) => {
    station.artworks.map((artwork) => artworksIn.push(artwork));
  });

  const type = [];
  for (let i = 0; i < artworksIn.length; i += 1) {
    !type.includes(artworksIn[i].type) ? type.push(artworksIn[i].type) : '';
  }

  type.sort();
  console.log(type);

  return type;
};

export default AllTypes;
