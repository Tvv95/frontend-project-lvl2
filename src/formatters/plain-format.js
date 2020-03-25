const quotesCheck = (value) => {
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
};

const plainFormat = (ast) => {
  const reducer = (acc, currentChild) => {
    switch (currentChild.type) {
      case 'unchanged':
        acc.push(`Property '${currentChild.key}' was unchanged\n`);
        break;
      case 'added':
        acc.push(`Property '${currentChild.key}' was added with value: ${quotesCheck(currentChild.value)}\n`);
        break;
      case 'deleted':
        acc.push(`Property '${currentChild.key}' was deleted\n`);
        break;
      case 'changed':
        acc.push(`Property '${currentChild.key}' was changed from ${quotesCheck(currentChild.changedValueBefore)} to ${quotesCheck(currentChild.changedValueAfter)}\n`);
        break;
      case 'hasChild':
        currentChild.children.map((current) => {
          const newCurrent = Object.assign(current);
          newCurrent.key = `${currentChild.key}.${current.key}`;
          return newCurrent;
        });
        acc.push(currentChild.children.reduce(reducer, []));
        break;
      default:
        break;
    }
    return acc;
  };
  const plainPreResult = ast.reduce(reducer, []);
  return plainPreResult.join('').replace(/,/gi, '').replace(/object Object/gi, 'complex value').slice(0, -1);
};

export default plainFormat;
