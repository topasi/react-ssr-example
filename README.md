# HOW TO USE

#### 1. Get API key from https://www.themoviedb.org

### 2. Rename env-sample to src/.env and put the api key

```
MOVIEDB_API_KEY=[API KEY]
```

#### 3. Install dependecies with pnpm

```
docker-compose build pnpm
docker-compose run --rm pnpm install
```

#### 4. Build react app

```
docker-compose run --rm pnpm run build
```

#### 5. Watch react app on port 3000

```
docker-compose up -d client
```

#### 6. Watch express app on port 5000

```
docker-compose up -d server
```
