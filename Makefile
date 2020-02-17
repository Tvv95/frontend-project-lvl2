# Makefile

install:
	npm install
start:
	npx babel-node src/bin/gendiff.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
run:
	npx babel-node src/bin/gendiff.js '__tests__/__fixtures__/fixture_before.json' '__tests__/__fixtures__/fixture_after.json'
test:
	npx jest