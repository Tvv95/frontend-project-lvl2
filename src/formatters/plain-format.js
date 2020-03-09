const quotesCheck = (value) => {
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
};

const plainFormatFunc = (ast) => {
  const reducer = (acc, currentChild) => {
    switch (currentChild.type) {
      case 'unchanged':
        acc += `Property '${currentChild.key}' was unchanged\n`;
        break;
      case 'added':
        acc += `Property '${currentChild.key}' was added with value: ${quotesCheck(currentChild.value)}\n`;
        break;
      case 'deleted':
        acc += `Property '${currentChild.key}' was deleted\n`;
        break;
      case 'changed':
        acc += `Property '${currentChild.key}' was changed from ${quotesCheck(currentChild.changedValues[0])} to ${quotesCheck(currentChild.changedValues[1])}\n`;
        break;
      case 'hasChild':
        currentChild.children.map((current) => {
          current.key = `${currentChild.key}.${current.key}`;
          return current;
        });
        acc += currentChild.children.reduce(reducer, '');
        break;
      default:
        break;
    }
    return acc;
  };
  const plainPreResult = ast.reduce(reducer, '');
  return plainPreResult.replace(/object Object/gi, 'complex value').slice(0, -1);
};

export default plainFormatFunc;
