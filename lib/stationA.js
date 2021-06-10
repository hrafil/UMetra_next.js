import fs from 'fs';

export const getStationA = () => {
  const stationA = fs.readFileSync('data/listA.json', 'utf8');
  return JSON.parse(stationA);
};
