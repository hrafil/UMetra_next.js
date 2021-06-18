import fs from 'fs';

const allStation = fs.readFileSync('data/listStation.json', 'utf8');
const allStationData = JSON.parse(allStation);
export const getAllStation = () => {
  return allStationData;
};
