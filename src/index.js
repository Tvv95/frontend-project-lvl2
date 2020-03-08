import parse from './parsers';
import buildAst from './buildAst';
import mainFormatFunc from './formatters/main-format';
import plainFormatFunc from './formatters/plain-format';
import jsonFormatFunc from './formatters/json-format';

const genDiff = (pathToFile1, pathToFile2, format = 'main') => {
  const [objBefore, objAfter] = parse(pathToFile1, pathToFile2);
  const ast = buildAst(objBefore, objAfter);
  const render = {
    main: mainFormatFunc,
    plain: plainFormatFunc,
    json: jsonFormatFunc,
  };
  return render[format](ast);
};

export default genDiff;
