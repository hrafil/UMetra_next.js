import listStation from '../data/listStation.json';

const useAllStation = () => {
  const lineA = listStation[0].art;
  const lineB = listStation[1].art;
  const lineC = listStation[2].art;

  const stationAFull = lineA.filter((station) => station.artworks);
  const stationBFull = lineB.filter((station) => station.artworks);
  const stationCFull = lineC.filter((station) => station.artworks);

  const justStationA = stationAFull.map((station) => station.station);
  const justStationB = stationBFull.map((station) => station.station);
  const justStationC = stationCFull.map((station) => station.station);

  const stationAB = justStationA.concat(justStationB);
  const stationABC = stationAB.concat(justStationC);

  stationABC.sort();

  stationABC.splice(stationABC.indexOf('Můstek'), 1);
  stationABC.splice(stationABC.indexOf('Florenc'), 1);
  stationABC.splice(stationABC.indexOf('Muzeum'), 1);

  return stationABC;
};

export default useAllStation;
