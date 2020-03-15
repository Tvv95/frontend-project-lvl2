const mainFormatFunc = (ast) => {
  const reducer = (acc, currChild) => {
    switch (currChild.type) {
      case 'unchanged':
        acc[currChild.key] = currChild.value;
        break;
      case 'added':
        acc[`+ ${currChild.key}`] = currChild.value;
        break;
      case 'deleted':
        acc[`- ${currChild.key}`] = currChild.value;
        break;
      case 'changed':
        [acc[`- ${currChild.key}`], acc[`+ ${currChild.key}`]] = [currChild.changedValues[0],
          currChild.changedValues[1]];
        break;
      case 'hasChild':
        acc[currChild.key] = currChild.children.reduce(reducer, {});
        break;
      default:
        break;
    }
    return acc;
  };
  const preRender = ast.reduce(reducer, {});
  const preRenderv2 = JSON.stringify(preRender, null, 4);
  const result = preRenderv2.replace(/[",]/gi, '').replace(/\s{2}([+-])/gi, '$1');
  return result;
};

export default mainFormatFunc;
