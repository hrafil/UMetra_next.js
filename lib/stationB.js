import fs from 'fs';

export const getStation = () => {
  const kontaktyContents = fs.readFileSync('data/listB.json', 'utf8');
  return JSON.parse(kontaktyContents);
};
