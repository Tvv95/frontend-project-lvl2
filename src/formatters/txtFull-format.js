import _ from 'lodash';

const getSpaceNumber = (treeDepth) => (treeDepth - 1) * 4 + 2;

const stringify = (value, spaceNumber) => {
  if (!_.isObject(value)) {
    return value;
  }
  return ['{\n', Object.keys(value).map((key) => `${' '.repeat(spaceNumber + 6)}${key}: ${value[key]}`),
    `\n${' '.repeat(spaceNumber + 2)}}`].join('');
};

const renderCase = (current, treeDepth, render) => {
  const spaceNumber = getSpaceNumber(treeDepth);
  switch (current.type) {
    case 'unchanged':
      return `${' '.repeat(spaceNumber)}  ${current.key}: ${stringify(current.value, spaceNumber)}`;
    case 'added':
      return `${' '.repeat(spaceNumber)}+ ${current.key}: ${stringify(current.value, spaceNumber)}`;
    case 'deleted':
      return `${' '.repeat(spaceNumber)}- ${current.key}: ${stringify(current.value, spaceNumber)}`;
    case 'changed':
      return [`${' '.repeat(spaceNumber)}- ${current.key}: ${stringify(current.valueBefore, spaceNumber)}`,
        `${' '.repeat(spaceNumber)}+ ${current.key}: ${stringify(current.valueAfter, spaceNumber)}`];
    case 'nested':
      return `${' '.repeat(spaceNumber)}  ${current.key}: ${render(current.children, treeDepth + 1)}`;
    default:
      throw new Error(`Unknown current.type: '${current.type}'!`);
  }
};

const getTxtFullFormat = (ast, treeDepth = 1) => {
  const preRender = _.flatten(ast
    .map((current) => renderCase(current, treeDepth, getTxtFullFormat)));
  return ['{', ...preRender, `${' '.repeat(getSpaceNumber(treeDepth) - 2)}}`].join('\n');
};

export default getTxtFullFormat;
