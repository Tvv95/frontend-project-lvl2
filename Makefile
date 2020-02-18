# Makefile

install:
	npm install
start:
	npx babel-node src/bin/gendiff.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
build:
	npm run build
test:
	npm test
test-coverage:
	npm test -- --coverage
run-json:
	gendiff '__tests__/__fixtures__/fixture_before.json' '__tests__/__fixtures__/fixture_after.json'
run-yaml:
	gendiff '__tests__/__fixtures__/fixture_before.yml' '__tests__/__fixtures__/fixture_after.yml'
run-ini:
	gendiff '__tests__/__fixtures__/fixture_before.ini' '__tests__/__fixtures__/fixture_after.ini'