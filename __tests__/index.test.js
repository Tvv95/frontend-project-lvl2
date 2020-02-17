import fs from 'fs';
import genDiff from '../src';

const root = __dirname;

test('test', () => {
  const genDiffFile = genDiff(`${root}/__fixtures__/fixture_before.json`, `${root}/__fixtures__/fixture_after.json`);
  expect(genDiffFile).toEqual(fs.readFileSync(`${root}/__fixtures__/fixture_result.txt`, 'utf8'));
});
