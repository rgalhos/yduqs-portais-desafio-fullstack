FROM node:20 AS builder

WORKDIR /app

ENV NODE_ENV=production

COPY package*.json ./

RUN npm ci

COPY . .

RUN chmod +x /app/docker-entrypoint.sh
RUN npm run build

CMD ["sh", "/app/docker-entrypoint.sh"]
