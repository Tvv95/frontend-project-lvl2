import getTxtFullFormat from './txtFull-format';
import getPlainFormat from './plain-format';
import jsonFormat from './json-format';

const render = (format) => {
  const renderFormatters = {
    txtFull: getTxtFullFormat,
    plain: getPlainFormat,
    json: jsonFormat,
  };
  return renderFormatters[format];
};

export default render;
