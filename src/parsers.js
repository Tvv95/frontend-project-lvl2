import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import ini from 'ini';

const parse = (pathToFile1, pathToFile2) => {
  const format = path.extname(pathToFile1);
  const objResult = [];

  switch (format) {
    case '.json':
      objResult.push(JSON.parse(fs.readFileSync(pathToFile1)));
      objResult.push(JSON.parse(fs.readFileSync(pathToFile2)));
      break;
    case '.yml':
      objResult.push(yaml.safeLoad(fs.readFileSync(pathToFile1)));
      objResult.push(yaml.safeLoad(fs.readFileSync(pathToFile2)));
      break;
    case '.ini':
      objResult.push(ini.parse(fs.readFileSync(pathToFile1).toString()));
      objResult.push(ini.parse(fs.readFileSync(pathToFile2).toString()));
      break;
    default:
      break;
  }
  return objResult;
};

export default parse;
