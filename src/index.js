import fs from 'fs';
import path from 'path';
import parse from './parsers';
import buildAst from './buildAst';
import render from './formatters';

const readFile = (pathToFile) => {
  const resultContent = fs.readFileSync(pathToFile).toString();
  return resultContent;
};

const checkFormat = (pathToFile) => path.extname(pathToFile).slice(1);

const genDiff = (pathToFile1, pathToFile2, format = 'txtFull') => {
  const objBefore = parse(readFile(pathToFile1), checkFormat(pathToFile1));
  const objAfter = parse(readFile(pathToFile2), checkFormat(pathToFile2));
  const ast = buildAst(objBefore, objAfter);
  return render(format)(ast);
};

export default genDiff;
