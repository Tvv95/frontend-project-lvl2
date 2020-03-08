const mainFormatFunc = (ast) => {
  const reducer = (acc, currChild) => {
    if (currChild.type === 'unchanged') {
      acc[currChild.key] = currChild.value;
    } else if (currChild.type === 'added') {
      acc[`+ ${currChild.key}`] = currChild.value;
    } else if (currChild.type === 'deleted') {
      acc[`- ${currChild.key}`] = currChild.value;
    } else if (currChild.type === 'changed') {
      [acc[`- ${currChild.key}`], acc[`+ ${currChild.key}`]] = [currChild.changedValues[0],
        currChild.changedValues[1]];
    } else if (currChild.type === 'hasChild') {
      acc[currChild.key] = currChild.children.reduce(reducer, {});
    }
    return acc;
  };
  const preRender = ast.reduce(reducer, {});
  const preRenderv2 = JSON.stringify(preRender, null, 2);
  return preRenderv2.replace(/[",]/gi, '');
};

export default mainFormatFunc;
