import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import ini from 'ini';

const readFile = (pathToFile) => {
  const resultFile = fs.readFileSync(pathToFile).toString();
  return resultFile;
};

const checkFormat = (pathToFile) => path.extname(pathToFile);

const parse = (pathToFile) => {
  const file = readFile(pathToFile);
  const format = checkFormat(pathToFile);
  const formatList = {
    '.json': JSON.parse,
    '.yml': yaml.safeLoad,
    '.ini': ini.parse,
  };
  return formatList[format](file);
};

export default parse;
