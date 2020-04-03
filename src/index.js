import fs from 'fs';
import path from 'path';
import parse from './parsers';
import buildAst from './buildAst';
import render from './formatters';

const readFile = (pathToFile) => {
  const resultFile = fs.readFileSync(pathToFile).toString();
  return resultFile;
};

const checkFormat = (pathToFile) => path.extname(pathToFile);

const genDiff = (pathToFile1, pathToFile2, format = 'txtFull') => {
  const objBefore = parse(readFile(pathToFile1), checkFormat(pathToFile1));
  const objAfter = parse(readFile(pathToFile2), checkFormat(pathToFile2));
  const ast = buildAst(objBefore, objAfter);
  return render(format)(ast);
};

export default genDiff;
