import fs from 'fs';

export const getStationB = () => {
  const stationB = fs.readFileSync('data/listB.json', 'utf8');
  return JSON.parse(stationB);
};
