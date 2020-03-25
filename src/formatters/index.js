import txtFullFormat from './txtFull-format';
import plainFormat from './plain-format';
import jsonFormat from './json-format';

const render = (format) => {
  const renderFormatters = {
    main: txtFullFormat,
    plain: plainFormat,
    json: jsonFormat,
  };
  return renderFormatters[format];
};

export default render;
