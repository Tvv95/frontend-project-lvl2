import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import ini from 'ini';

const parse = (pathToFile1, pathToFile2) => {
  const objBefore = fs.readFileSync(pathToFile1).toString();
  const objAfter = fs.readFileSync(pathToFile2).toString();
  const format = path.extname(pathToFile1);
  const formatList = {
    '.json': JSON.parse,
    '.yml': yaml.safeLoad,
    '.ini': ini.parse,
  };
  return [formatList[format](objBefore), formatList[format](objAfter)];
};

export default parse;
