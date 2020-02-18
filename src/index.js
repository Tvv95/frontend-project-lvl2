import _ from 'lodash';
import parse from './parsers';

const genDiff = (pathToFile1, pathToFile2) => {
  const [objBefore, objAfter] = parse(pathToFile1, pathToFile2);

  const reducer = (acc, current) => {
    if (_.has(objAfter, current)) {
      if (objBefore[current] === objAfter[current]) {
        acc[current] = objBefore[current];
      } else {
        acc[`- ${current}`] = objBefore[current];
        acc[`+ ${current}`] = objAfter[current];
      }
    } else {
      acc[`- ${current}`] = objBefore[current];
    }
    return acc;
  };

  const result = Object.keys(objBefore).reduce(reducer, {});
  Object.keys(objAfter).filter((filtCurrent) => !(_.has(objBefore, filtCurrent)))
    .reduce((acc, current) => {
      acc[`+ ${current}`] = objAfter[current];
      return acc;
    }, result);
  return JSON.stringify(result, null, 2);
};

export default genDiff;
