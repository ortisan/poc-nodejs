# Testing NestJs Application

## Running the app

Starts environment
```bash
docker compose -f docker/docker-compose.yaml up 
```

Generate Prisma Models
```bash
prisma generate
```  

### Starts NestJs Application

```bash
# development
$ npm run start-web

# watch mode
$ npm run start-web:dev

# production mode
$ npm run start-web:prod
```

### Debug Lambdas

Install lambda-local globally

```bash
npm install -g lambda-local
```

Run lambda-local

```bash
lambda-local -l dist/apps/audit-function/main.js -h handler -e debug/sqs/event.json
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
