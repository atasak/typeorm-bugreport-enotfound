run := npx

tscFlags := --preserveWatchOutput
makeFlags := --no-print-directory -B
dockerUpFlags := --force-recreate

serverbuild := ./build/server

build-server:
	$(info Starting server build)
	@$(run) webpack --config webpack.js

start-server:
	$(info Starting server)
	@NODE_ENV=development node $(serverbuild)/server.js

start-docker-server:
	@docker-compose up $(dockerUpFlags)
