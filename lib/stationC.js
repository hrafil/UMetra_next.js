import fs from 'fs';

const stationC = fs.readFileSync('data/listC.json', 'utf8');
const stationCData = JSON.parse(stationC);
export const getStationC = () => {
  return stationCData;
};
