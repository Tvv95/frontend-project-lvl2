import yaml from 'js-yaml';
import ini from 'ini';

const parse = (file, format) => {
  const formatList = {
    '.json': JSON.parse,
    '.yml': yaml.safeLoad,
    '.ini': ini.parse,
  };
  return formatList[format](file);
};

export default parse;
