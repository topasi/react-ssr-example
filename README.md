# HOW TO USE

#### Get API key from https://www.themoviedb.org and rename env-sample to src/.env and put the api key

```
MOVIEDB_API_KEY=[API KEY]
```

#### Install dependecies with pnpm via docker-compose

```
docker-compose build pnpm
docker-compose run --rm pnpm install
```

#### Watch client side on port 3000

```
docker-compose up -d client
```

#### To watch server side build client side first

```
docker-compose run --rm pnpm run build
```

#### Watch server side on port 5000

```
docker-compose up -d server
```
