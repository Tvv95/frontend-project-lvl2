import fs from 'fs';
import genDiff from '../src';

const root = __dirname;
const pathBefore = (format) => `${root}/__fixtures__/fixture_before.${format}`;
const pathAfter = (format) => `${root}/__fixtures__/fixture_after.${format}`;
const mainResult = fs.readFileSync(`${root}/__fixtures__/fixture_result.txt`, 'utf8');
const plainResult = fs.readFileSync(`${root}/__fixtures__/fixture_plain_result.txt`, 'utf8');
const jsonResult = fs.readFileSync(`${root}/__fixtures__/fixture_json_result.json`, 'utf8');

test('test_json', () => {
  expect(genDiff(pathBefore('json'), pathAfter('json'))).toEqual(mainResult);
});

test('test_yaml', () => {
  expect(genDiff(pathBefore('yml'), pathAfter('yml'))).toEqual(mainResult);
});

test('test_ini', () => {
  expect(genDiff(pathBefore('ini'), pathAfter('ini'))).toEqual(mainResult);
});

test('test_plain_json', () => {
  expect(genDiff(pathBefore('json'), pathAfter('json'), 'plain')).toEqual(plainResult);
});

test('test_return_json', () => {
  expect(genDiff(pathBefore('yml'), pathAfter('yml'), 'json')).toEqual(jsonResult);
});
