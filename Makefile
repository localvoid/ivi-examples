build: build_snake build_10k build_dbmon build_dbmon_raw build_uibench

build_snake:
	cd packages/apps/snake && yarn dist && yarn gh-publish

build_10k:
	cd packages/benchmarks/10k && yarn dist && yarn gh-publish

build_dbmon:
	cd packages/benchmarks/dbmon && yarn dist && yarn gh-publish

build_dbmon_raw:
	cd packages/benchmarks/dbmon-raw && yarn dist && yarn gh-publish

build_uibench:
	cd packages/benchmarks/uibench && yarn dist:rollup && yarn gh-publish
