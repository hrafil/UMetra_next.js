import fs from 'fs';

const stationA = fs.readFileSync('data/listA.json', 'utf8');
const stationAData = JSON.parse(stationA);
export const getStationA = () => {
  return stationAData;
};
