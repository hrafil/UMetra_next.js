import fs from 'fs';

export const getStation = () => {
  const stationB = fs.readFileSync('data/listB.json', 'utf8');
  return JSON.parse(stationB);
};
