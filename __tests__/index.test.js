import fs from 'fs';
import path from 'path';
import genDiff from '../src';

const root = __dirname;
const getFixturePath = (name) => path.join(root, '__fixtures__', name);

const formats = [
  ['json', 'json', 'result.txt'],
  ['yml', 'yml', 'result.txt'],
  ['ini', 'ini', 'result.txt'],
  ['json', 'json', 'plain_result.txt', 'plain'],
  ['yml', 'yml', 'json_result.json', 'json'],
];

test.each(formats)('%s - %s => %s', (beforeFormat, afterFormat, expectedFormat, formatResult = 'txtFull') => {
  const pathBefore = getFixturePath(`fixture_before.${beforeFormat}`);
  const pathAfter = getFixturePath(`fixture_after.${afterFormat}`);
  const pathResult = getFixturePath(`fixture_${expectedFormat}`);
  const actual = genDiff(pathBefore, pathAfter, formatResult);
  const expected = fs.readFileSync(pathResult, 'utf-8');
  expect(actual).toEqual(expected);
});
