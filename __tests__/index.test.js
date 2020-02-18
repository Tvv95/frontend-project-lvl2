import fs from 'fs';
import genDiff from '../src';

const root = __dirname;

test('test_json', () => {
  const genDiffFile = genDiff(`${root}/__fixtures__/fixture_before.json`, `${root}/__fixtures__/fixture_after.json`);
  expect(genDiffFile).toEqual(fs.readFileSync(`${root}/__fixtures__/fixture_result.txt`, 'utf8'));
});

test('test_yaml', () => {
  const genDiffFile = genDiff(`${root}/__fixtures__/fixture_before.yml`, `${root}/__fixtures__/fixture_after.yml`);
  expect(genDiffFile).toEqual(fs.readFileSync(`${root}/__fixtures__/fixture_result.txt`, 'utf8'));
});

test('test_ini', () => {
  const genDiffFile = genDiff(`${root}/__fixtures__/fixture_before.ini`, `${root}/__fixtures__/fixture_after.ini`);
  expect(genDiffFile).toEqual(fs.readFileSync(`${root}/__fixtures__/fixture_result.txt`, 'utf8'));
});
