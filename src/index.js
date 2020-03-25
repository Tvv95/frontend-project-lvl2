import parse from './parsers';
import buildAst from './buildAst';
import render from './formatters';

const genDiff = (pathToFile1, pathToFile2, format = 'main') => {
  const objBefore = parse(pathToFile1);
  const objAfter = parse(pathToFile2);
  const ast = buildAst(objBefore, objAfter);
  return render(format)(ast);
};

export default genDiff;
