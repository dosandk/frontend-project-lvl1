install:
	npm install
install-deps:
	npm ci
brain-games:
	node bin/brain-even.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
