const plainFormatFunc = (ast) => {
  const quotesCheck = (value) => {
    if (typeof value === 'string') {
      return `'${value}'`;
    }
    return value;
  };

  const reducer = (acc, currentChild) => {
    if (currentChild.type === 'unchanged') {
      acc += `Property '${currentChild.key}' was unchanged\n`;
    } else if (currentChild.type === 'added') {
      acc += `Property '${currentChild.key}' was added with value: ${quotesCheck(currentChild.value)}\n`;
    } else if (currentChild.type === 'deleted') {
      acc += `Property '${currentChild.key}' was deleted\n`;
    } else if (currentChild.type === 'changed') {
      acc += `Property '${currentChild.key}' was changed from ${quotesCheck(currentChild.changedValues[0])} to ${quotesCheck(currentChild.changedValues[1])}\n`;
    } else if (currentChild.type === 'hasChild') {
      currentChild.children.map((current) => {
        current.key = `${currentChild.key}.${current.key}`;
        return current;
      });
      acc += currentChild.children.reduce(reducer, '');
    }
    return acc;
  };
  const plainPreResult = ast.reduce(reducer, '');
  return plainPreResult.replace(/object Object/gi, 'complex value').slice(0, -1);
};

export default plainFormatFunc;
