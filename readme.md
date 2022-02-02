# Minimal crashing example for typeorm issue [#8604](https://github.com/typeorm/typeorm/issues/8604)

Note that it works by default, on typeorm version 0.2.26. After upgrading to typeorm version 0.2.28 (or later), it
crashes with `ENOTFOUND <hostname>`

## Usage:

Dependencies:

- make
- docker
- docker-compose
- node/typescript

run:

- `npm i`
- `make build-server`
- `make start-docker-server`

Note: start-server is used internally inside the docker container.

### Generating the crash

- In package.json, change the typeorm version from `0.2.26` to `0.2.28`
- Run `npm i`
- Run `make start-docker-server`