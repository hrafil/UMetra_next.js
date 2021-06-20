import listStation from '../data/listStation.json';

const useAllStation = () => {
  const justWithArt = listStation.filter((station) => station.artworks);
  const justStation = justWithArt.map((station) => station.station);

  justStation.sort();

  return justStation;
};

export default useAllStation;
