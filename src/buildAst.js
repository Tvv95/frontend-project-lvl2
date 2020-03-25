import _ from 'lodash';

const propertyActions = [
  {
    type: 'hasChild',
    check: (firstObj, secondObj, key) => _.isObject(firstObj[key])
      && _.isObject(secondObj[key]),
    process: (firstValue, secondValue, func) => ({ children: func(firstValue, secondValue) }),
  },
  {
    type: 'added',
    check: (firstObj, secondObj, key) => !_.has(firstObj, key) && _.has(secondObj, key),
    process: (firstValue, secondValue) => ({ value: secondValue }),
  },
  {
    type: 'deleted',
    check: (firstObj, secondObj, key) => _.has(firstObj, key) && !_.has(secondObj, key),
    process: (firstValue) => ({ value: firstValue }),
  },
  {
    type: 'changed',
    check: (firstObj, secondObj, key) => firstObj[key] !== secondObj[key],
    process: (firstValue, secondValue) => ({
      changedValueBefore: firstValue,
      changedValueAfter: secondValue,
    }),
  },
  {
    type: 'unchanged',
    check: (firstObj, secondObj, key) => firstObj[key] === secondObj[key],
    process: (firstValue) => ({ value: firstValue }),
  },
];

const getPropertyAction = (objBefore, objAfter, current) => propertyActions
  .find(({ check }) => check(objBefore, objAfter, current));

const buildAst = (objBefore, objAfter) => {
  const allkeys = _.union(Object.keys(objBefore), Object.keys(objAfter));

  return allkeys.map((key) => {
    const { type, process } = getPropertyAction(objBefore, objAfter, key);
    const value = process(objBefore[key], objAfter[key], buildAst);
    return { key, type, ...value };
  });
};

export default buildAst;
