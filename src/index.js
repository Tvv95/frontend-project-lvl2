import fs from 'fs';
import _ from 'lodash'

console.log('outside');

const genDiff = (pathToFile1, pathToFile2) => {
  console.log('asdfasdfsadfsad');

  const objBefore = JSON.parse(fs.readFileSync(pathToFile1), 'utf-8');
  const objAfter = JSON.parse(fs.readFileSync(pathToFile2), 'utf-8');

  console.log(objBefore);
  console.log(objAfter);

  const result = {};
  for (const key in objBefore) {
    if (_.has(objAfter, key)) {
      if (objBefore[key] === objAfter[key]) {
        result[key] = objBefore[key];
      } else {
        result[`- ${key}`] = objBefore[key];
        result[`+ ${key}`] = objAfter[key];
      }
    } else {
      result[`- ${key}`] = objBefore[key];
    }
  }
  for (const keyAfter in objAfter) {
    if (!(_.has(objBefore, keyAfter))) {
      result[`+ ${keyAfter}`] = objAfter[keyAfter];
    }
  }
  return JSON.stringify(result, null, 2);
}

export default genDiff;