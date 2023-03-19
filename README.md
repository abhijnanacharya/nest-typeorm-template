<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456

## Description

This project guides you to set up a NestJs Application using typeorm. Migrations are enabled. 

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```



## MIGRATIONS

```bash
# generate Migrations
$ npm run migration:generate -- db/migrations/<Migration Name>
# run Migrations
$ npm run migration:run  
# run fake
$ npm run migration:run-fake

#revert 
$ npm run migration:revert

#revert fake
$ npm run migration:revert-fake
```

