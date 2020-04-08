import yaml from 'js-yaml';
import ini from 'ini';

const parse = (content, format) => {
  const formatList = {
    json: JSON.parse,
    yml: yaml.safeLoad,
    ini: ini.parse,
  };
  return formatList[format](content);
};

export default parse;
