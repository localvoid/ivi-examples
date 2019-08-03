build: build_snake build_dbmon build_dbmon_raw build_uibench build_dirtycheck

build_snake:
	cd packages/apps/snake && yarn dist && yarn gh-publish

build_dbmon:
	cd packages/benchmarks/dbmon && yarn dist && yarn gh-publish

build_dbmon_raw:
	cd packages/benchmarks/dbmon-raw && yarn dist && yarn gh-publish

build_uibench:
	cd packages/benchmarks/uibench && yarn dist && yarn gh-publish

build_dirtycheck:
	cd packages/benchmarks/dirtycheck && yarn dist && yarn gh-publish
