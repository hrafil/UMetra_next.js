import fs from 'fs';

export const getStationC = () => {
  const stationC = fs.readFileSync('data/listC.json', 'utf8');
  return JSON.parse(stationC);
};
