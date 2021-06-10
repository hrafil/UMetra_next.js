import fs from 'fs';

const stationB = fs.readFileSync('data/listB.json', 'utf8');
const stationBData = JSON.parse(stationB);
export const getStationB = () => {
  return stationBData;
};
