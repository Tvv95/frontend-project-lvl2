import _ from 'lodash';

const stringify = (value, space) => {
  if (_.isObject(value)) {
    return ['{\n', Object.keys(value).map((key) => `${' '.repeat(space + 6)}${key}: ${value[key]}`), `\n${' '.repeat(space + 2)}}`].join('');
  }
  return value;
};

const renderCase = (current, space, render) => {
  switch (current.type) {
    case 'unchanged':
      return `${' '.repeat(space)}  ${current.key}: ${stringify(current.value, space)}`;
    case 'added':
      return `${' '.repeat(space)}+ ${current.key}: ${stringify(current.value, space)}`;
    case 'deleted':
      return `${' '.repeat(space)}- ${current.key}: ${stringify(current.value, space)}`;
    case 'changed':
      return [`${' '.repeat(space)}- ${current.key}: ${stringify(current.changedValueBefore, space)}`,
        `${' '.repeat(space)}+ ${current.key}: ${stringify(current.changedValueAfter, space)}`];
    case 'hasChild':
      return `${' '.repeat(space)}  ${current.key}: ${render(current.children, space + 4)}`;
    default:
      return null;
  }
};

const txtFullFormat = (ast, space = 2) => {
  const preRender = _.flatten(ast.map((current) => renderCase(current, space, txtFullFormat)));
  return ['{', ...preRender, `${' '.repeat(space - 2)}}`].join('\n');
};

export default txtFullFormat;
