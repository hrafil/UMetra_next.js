import listStation from '../data/listStation.json';

const AllAuthors = () => {
  const stationsFull = listStation.filter((item) => item.artworks !== false);
  console.log(stationsFull);

  const artworksIn = [];
  stationsFull.map((station) => {
    station.artworks.map((artwork) => artworksIn.push(artwork));
  });
  console.log(artworksIn);

  const author = [];
  for (let i = 0; i < artworksIn.length; i += 1) {
    !author.includes(artworksIn[i].author)
      ? author.push(artworksIn[i].author)
      : '';
  }

  author.sort();
  console.log(author);

  return author;
};

export default AllAuthors;
