node_modules:
	yarn install --frozen-lockfile

build-assets: node_modules
	yarn encore production

watch-assets: node_modules
	yarn encore dev --watch

.PHONY: watch-assets

# vim: noexpandtab
