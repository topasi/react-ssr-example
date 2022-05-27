FROM node:lts-alpine
WORKDIR /app
RUN npm install -g pnpm
RUN pnpm config set store-dir ./node_modules/.pnpm-store
ENTRYPOINT ["pnpm"]