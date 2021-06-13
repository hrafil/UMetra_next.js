import fs from 'fs';

const stationA = fs.readFileSync('data/listAll.json', 'utf8');
const stationAData = JSON.parse(stationAll);
export const getStationAll = () => {
  return stationAllData;
};
