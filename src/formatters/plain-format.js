import _ from 'lodash';

const convertValue = (value) => {
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  if (_.isObject(value) === true) {
    return '[complex value]';
  }
  return value;
};

const renderCase = (currentChild, keyName = '') => {
  const newKey = (keyName === '' ? currentChild.key : `${keyName}.${currentChild.key}`);

  switch (currentChild.type) {
    case 'unchanged':
      return `Property '${newKey}' was unchanged\n`;
    case 'added':
      return `Property '${newKey}' was added with value: ${convertValue(currentChild.value)}\n`;
    case 'deleted':
      return `Property '${newKey}' was deleted\n`;
    case 'changed':
      return `Property '${newKey}' was changed from ${convertValue(currentChild.changedValueBefore)} to ${convertValue(currentChild.changedValueAfter)}\n`;
    case 'hasChild':
      return currentChild.children.map((current) => renderCase(current, newKey));
    default:
      throw new Error(`Unknown current.type: '${currentChild.type}'!`);
  }
};
const getPlainFormat = (ast) => {
  const preRender = _.flattenDeep(ast.map((current) => renderCase(current)));
  return preRender.join('').slice(0, -1);
};

export default getPlainFormat;
