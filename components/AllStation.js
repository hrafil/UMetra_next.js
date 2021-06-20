import listStation from '../data/listStation.json';

const useAllStation = () => {
  const justWithArt = listStation.filter((station) => station.artworks);
  const justStation = justWithArt.map((station) => station.station);

  justStation.sort();

  justStation.splice(justStation.indexOf('Můstek'), 1);
  justStation.splice(justStation.indexOf('Florenc'), 1);
  justStation.splice(justStation.indexOf('Muzeum'), 1);

  return justStation;
};

export default useAllStation;
