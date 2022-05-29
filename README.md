# HOW TO USE

#### Get API key from https://www.themoviedb.org and edit env-example

```
MOVIEDB_API_KEY=[API KEY]
```

#### Install dependecies with pnpm

```
docker-compose build pnpm
docker-compose run --rm pnpm install
```

#### Build react app

```
docker-compose run --rm pnpm run build
```

#### Watch react app on port 3000

```
docker-compose up -d client
```

#### Watch express app on port 5000

```
docker-compose up -d server
```
